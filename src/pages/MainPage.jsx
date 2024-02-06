import Wrapper from '../components/Wrapper/Wrapper';
import PopExit from '../components/PopExit/PopExit';
import PopNewCard from '../components/PopNewCard/PopNewCard';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { useEffect, useState } from 'react'; // useState - Hook
import { cardList } from '../data';
import { Link, Outlet } from 'react-router-dom';
import { appRoutes } from '../lib/appRoutes';

export default function MainPage (){
  const [cards, setCards] = useState(cardList); // setCards - состояние
  const [isLoaded, setIsLoaded] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards, // добавили старые данные в нов массив
      {
        id: cards.length + 1,
        theme: 'Research',
        title: 'Новая задача',
        date: '30.10.23',
        status: 'Без статуса'
      }
    ]);
  }

return (
    <>
    <Wrapper>
      <Outlet />
      <PopExit />
      <PopNewCard />
      <Header addCard={addCard} />
      <Main cardList={cards} isLoaded={isLoaded} />
      <Link to = {appRoutes.REGISTER}> Регистрация</Link>
      <br />
      <Link to = {appRoutes.LOGIN}> Войти </Link>
    </Wrapper>
      
    </>
);
}