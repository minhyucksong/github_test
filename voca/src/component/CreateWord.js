import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hocks/useFetch"

export default function CreactWord () {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoding , setIsLoding] = useState(false);

    function onSubmit(e){
        e.preventDefault();

        if(!isLoding){
            setIsLoding(true);
            fetch(`http://localhost:3001/words/`,{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false,
                }),
            }).then( res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    history(`/day/${dayRef.current.value}`);
                    setIsLoding(false);
                }
            });
        }
    };

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>ENG</label>
            <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
            <label>KOR</label>
            <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map( day => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
        </div>
        <button 
        style={{
            opacity : isLoding ? 0.3 : 1,
        }}
        >
            {isLoding ? "Saving..." : "저장"}
        </button>
    </form>
}