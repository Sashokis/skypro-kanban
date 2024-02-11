import './App.css'; 
import { GlobalStyle } from './Global.styled';
import { Route, Routes } from 'react-router';
import { appRoutes } from './lib/appRoutes';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';
import PopExitPage from './pages/PopExitPage';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState(null);



  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element = {<PrivateRoute user = {userData}/>}>
          <Route path = {appRoutes.MAIN} element = {<MainPage userData={userData}/>} >
            <Route path = {appRoutes.EXIT} element = {< PopExitPage/>} />
            <Route path = {`${appRoutes.CARD}/:cardId`} element = {<CardPage/>} />      
          </Route> 
        </Route>
        <Route path = {appRoutes.LOGIN} element = {<LoginPage setUserData = {setUserData}/>} />
        <Route path = {appRoutes.REGISTER} element = {<RegisterPage setUserData = {setUserData}/>} />
        <Route path = {appRoutes.NOT_FOUND} element = {<NotFoundPage/>}/>
      </Routes>
    </> 
  );
}

export default App;
