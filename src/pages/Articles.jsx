import { Link, Outlet } from "react-router-dom";


const Articles = ()=>{
return(
<>
{/* <header style={boxStyle}>헤더영역</header> */}
<Outlet />
{/* 아웃렛 --> 특정부분에만 컴포넌트가 렌더링 된다. */}

<ul>
    <li><Link to="/articles/1">게시글-1</Link></li>
    <li><Link to="/articles/2">게시글-2</Link></li>
    <li><Link to="/articles/3">게시글-3</Link></li>
</ul>
{/* <footer style={boxStyle}>아티클즈 푸터영역</footer> */}
</>
);

}

export default Articles;