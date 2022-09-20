import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Foot from './components/Foot';
import Head from './components/Head';


const Wrapper = styled.div`
 width:100%;
 max-width:1200px;
 margin:0 auto;

 section{
    img{
        display:block;
        width:100%;
    }
 }
`;

const Main = styled.main`
margin-top:66px;
`;

//공통레이아웃컴포넌트
const ProfileLayout = ()=>{
    return(
<Wrapper>
    <Head />
    <Main>
    <Outlet />
    </Main>
    <Foot />
</Wrapper>
    );
}

export default ProfileLayout;