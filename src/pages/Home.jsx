import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <div>
            <h1>홈</h1>
            <p>방문해주셔서감사합니다.</p>

            {/* <a href="/about">어바웃으로 이동</a> */}
            <p>
                <Link to="/about">About으로 이동</Link>
            </p>
        </div>
    );
}

export default Home;