import { useParams , useNavigate } from 'react-router-dom';
import useFetch from '../hocks/useFetch';
import Word from './Word';

export default function Day() {
    const {day} = useParams();
    const days = useFetch("http://localhost:3001/days")
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    const history = useNavigate();

    function moveDays(e) {
        if ( JSON.parse({day}.day) <= 1 ) {
            // history('/')
            e.preventDefault();
        } else {
            history(`/day/${day-1}`)
        }
    };

    const rightMove = (e) => {
        if (days.length <= JSON.parse({day}.day)){
            // history('/')
            e.preventDefault();
        } 
        else {
            history(`/day/${JSON.parse({day}.day)+1}`)
        }
    }

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loding...</span>}
            <div className='center'>
                <button onClick={moveDays}
                style={{
                    float:"left",
                }}>{'<'}</button>
                <table className='dayTable'>
                    <tbody>
                        {words.map(word => (
                        <Word word={word} key={word.id}/>   
                        ))}
                    </tbody>
                </table>
                <button className='btn_margin' onClick={rightMove}>{'>'}</button>
            </div>
        </>
    );
};