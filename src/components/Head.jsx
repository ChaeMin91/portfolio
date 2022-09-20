import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = styled.header`
    position:fixed;
    left:0;
    top:0;
    z-index:1000;
    width:100%;
    min-width:960px;
    background-color:#fff;
    box-sizing:border-box;

    >.container{
        position:relative;
        width:1200px;
        height:66px;
        margin:0 auto;
        border-bottom:1px solid #eee;

        >h1{
            position:absolute;
            left:10px;
            top:50%;
            margin-top:-16px;
            background-image:url(./images/logo.png);
            background-repeat:no-repeat;
            
            >a{
                display:block;
                height:32px;
                color:#666;
                font-size:16px;
                line-height:32px;
                text-indent:40px;
            }
        }//end of h1

        nav{
            position:absolute;
            right:20px;
            top:30px;

            >ul{
                display:flex;

                >li{
                    border-left:1px solid #ccc;
                    &:first-child{border:none;}

                    >a{
                        padding:0 20px;
                        color:#666;
                        font-weight:600;
                        text-transform:uppercase;

                        &.on,
                        &:hover{color:#222;}
                    }
                }
            }
        }//end of nav
    }//end of .container
`;

const Head = ()=>{
    return (

        <Header>
            <div className="container">
                <h1><NavLink to="/">홍길동 포트폴리오</NavLink></h1>
                <nav>
                    <ul>
                    <Navigation to="/aboutme">AboutMe</Navigation>
                    <Navigation to="/talktalk">TalkTalk</Navigation>
                    <Navigation to="/skill">Skill</Navigation>
                    <Navigation to="/ability">Ability</Navigation>
                    <Navigation to="/contact">Contact</Navigation>


                    </ul>
                </nav>
            </div>
        </Header>

    );
}

export default Head;