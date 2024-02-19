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
        <Route element = {<PrivateRoute />}>
          <Route path = {appRoutes.MAIN} element = {<MainPage />} >
            <Route path = {appRoutes.EXIT} element = {< PopExitPage setUserData = {setUserData}/>} />
            <Route path = {`${appRoutes.CARD}/:cardId`} element = {<CardPage/>} />      
          </Route> 
        </Route>
        <Route path = {appRoutes.LOGIN} element = {<LoginPage />} />
        <Route path = {appRoutes.REGISTER} element = {<RegisterPage />} />
        <Route path = {appRoutes.NOT_FOUND} element = {<NotFoundPage/>}/>
      </Routes>
    </> 
  );
}

export default App;
