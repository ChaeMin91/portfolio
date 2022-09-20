import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = ()=>{
return(
//라우터를 적용할때는 가장 최상단에 BrowserRouter 컴포넌트로 감싸야한다.
<BrowserRouter>




<Routes>
    
    {/* 공통 레이아웃 컴포넌트 역할 */}
    <Route element={<Layout />}>
   
        {/* 인덱스는 path=""와 동일한 의미이다. */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* 중첩(서브) 라우팅 - 공통 레이아웃의 작성 원리*/}
        <Route path="/articles" element={<Articles />} >
        <Route path=":id" element={<Article />} />    
        </Route>

        <Route path="*" element={<NotFound />} />
        {/* *은 모든 페이지를 의미. 순차적으로 페이지를 순회한다. */}
    
    </Route>

</Routes>
</BrowserRouter>


);

}

export default App;