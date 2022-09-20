import { Outlet, Link } from "react-router-dom";

const headerStyle = {
    height:50,
    lineHeight:'50px',
    textAlign:'center',
    backgroundColor:'#ccc'
};

const footerStyle = {
    height:50,
    lineHeight:'50px',
    textAlign:'center',
    backgroundColor:'#ccc'
};

const Layout = ()=>{
    return (
        <div id="wrap">
            <header style={headerStyle}>
                <nav>
                    <ul style={{display:'flex',listStyle:'none'}}>
                        <li style={{marginRight:10}}><Link to="/">Home</Link></li>
                        <li style={{marginRight:10}}><Link to="/about">About</Link></li>
                        <li style={{marginRight:10}}><Link to="/articles">게시글목록</Link></li>
                        {/* <li><Link to=""></Link></li>
                        <li><Link to=""></Link></li> */}
                    </ul>
                </nav>

            </header>
            <main style={{padding:50}}>
                <Outlet />
            </main>
            <footer style={footerStyle}>푸터영역</footer>
        </div>
    );
}

export default Layout;