import React,{useState} from 'react';
import { HashRouter, Redirect, Route, Routes } from 'react-router-dom';
import './router.css';
import { Spin } from 'antd';
// import Login from '../views/login/Login';
// import NewsSandBox from '../views/sandbox/NewsSandBox';
// import Detail from '../views/visitor/Detail';
// import News from '../views/visitor/News';
import HomePage from '../views/HomePage';
import ContactUs from '../views/ContactUs';
import JPG00 from '../img/00.jpg';
const IndexRouter = () => {
    const [navigateTo, setNavigateTo] = useState('/');
    const handleChangeTag=(e,num)=>{
        console.log(e.target)
        if(e.target.className!=='activeHeader'){
            let active=document.getElementsByClassName('activeHeader');
            active[0].className='each-header-item';
            e.target.className='activeHeader';
            switch(num){
              case 1:
                setNavigateTo('/');
                break;
              case 2:
                setNavigateTo('/contact');
                break;
              default:
                setNavigateTo('/contact');
                break;
            }
        }
    }
    return (
        <HashRouter>
            <div className='header'>
                <div className='fix-header' style={{background:`url(${JPG00}) center`}}>
                第二届机器学习进展及应用研讨会
                <span>(WAAML) </span>
                </div>
                <div className='fix-header-2'>
                    <div onClick={(e)=>handleChangeTag(e,1)} className='activeHeader'>首页</div> 
                    <div onClick={(e)=>handleChangeTag(e,2)} className='each-header-item'>会议安排</div>  
                    {/* <div onClick={(e)=>handleChangeTag(e,3)} className='each-header-item'>页面2</div>  
                    <div onClick={(e)=>handleChangeTag(e,4)} className='each-header-item'>页面3</div>  
                    <div onClick={(e)=>handleChangeTag(e,5)} className='each-header-item'>页面4</div>    */}
                </div>
            </div>
                <Routes>
                    <Route path='/contact' element={
                        <ContactUs navigateTo={navigateTo}></ContactUs>
                    }/>
                    {/* <Route path='/news' component={News}/> */}
                    {/* <Route path='/login' component={Login}/>
                    <Route path='/news' component={News}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/' render={()=> 
                        localStorage.getItem("token")?
                        <NewsSandBox></NewsSandBox>:
                        <Redirect to="/login"/>
                    }/> */}
                    <Route path='/' element={
                        <HomePage navigateTo={navigateTo}></HomePage>
                    }/>
                </Routes>
            
            <div className='footer'>
                <div>Copyright © 吉林大学符号计算实验室</div>
                <div>Powered by © 吉林大学-taozixun-1983319724@qq.com</div>
            </div>
        </HashRouter>
    );
}

export default IndexRouter;
