import { Link } from "react-router-dom";

const About =()=>{
    return(
        <div>
            <h1>소개</h1>
            <p>웹퍼블리셔,프론트엔드개발자를꿈꿉니다.</p>
            {/* <a href="/">홈으로 이동</a> */}
            <p>
                <Link to="/">Home으로 이동</Link>  {/* 단일페이지 웹 어플리케이션 작동방식 */}

            </p>
        </div>
    );
}

export default About;