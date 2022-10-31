import {Link, useLocation,useNavigate} from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const history = useNavigate();
    const dayNum = location.pathname.substring(location.pathname.length-1)

    function del (){
        if(window.confirm("현재일을 삭제하시겠습니까?")){
            fetch(`http://localhost:3001/days/${dayNum}`,{
                method : "DELETE",
            })
            .then(
                history("/")
            )}
    }

    return (
        <div className='header'>
            <h1>
                <Link to="/">토익 영단어 고급</Link>
            </h1>
            <div className="menu">
                <Link to ="/create_word" className="link">
                    단어 추가
                </Link>
                <Link to ="/create_day" className="link">
                    Day 추가
                </Link>
                <button className='btn_del' onClick={del}>Day 삭제</button>
            </div>
        </div>
    );
};