import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// import Home from './profilePages/Home';
// import ProfileLayout from './ProfileLayout';
// import AboutMe from './profilePages/AboutMe';
// import TalkTalk from './profilePages/TalkTalk';
// import Skill from './profilePages/Skill';
// import Ability from './profilePages/Ability';
// import Contact from './profilePages/Contact';

//컴포넌트를 렌더링 하는 시점에 페이지를 비동기적으로 로딩- 서스펜스로 사용
const Home = lazy(()=>import('./profilePages/Home'));
const ProfileLayout = lazy(()=>import('./ProfileLayout'));
const AboutMe = lazy(()=>import('./profilePages/AboutMe'));
const TalkTalk = lazy(()=>import('./profilePages/TalkTalk'));
const Skill = lazy(()=>import('./profilePages/Skill'));
const Ability = lazy(()=>import('./profilePages/Ability'));
const Contact = lazy(()=>import('./profilePages/Contact'));

const { PUBLIC_URL } = process.env;

const Proflie = ()=>{
    return (
<BrowserRouter basename={PUBLIC_URL}>
<Suspense fallback={<ProfileLayout />}>


    <Routes>

        {/* 공통 레이아웃 설정 */}
        <Route element={<ProfileLayout />} >

        {/* 각 페이지에 대한 라우팅 설정*/}
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/talktalk" element={<TalkTalk />}/>
            <Route path="/skill" element={<Skill />}/>
            <Route path="/ability" element={<Ability />}/>
            <Route path="/contact" element={<Contact />}/>

        </Route>

    </Routes>
</Suspense>
</BrowserRouter>
    );
}
export default Proflie;