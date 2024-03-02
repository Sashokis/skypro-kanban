import Wrapper from '../components/Wrapper/Wrapper';
import PopNewCard from '../components/PopNewCard/PopNewCard';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { useEffect, useState } from 'react'; // useState - Hook
// import { cardList } from '../data'; 
import { Outlet } from 'react-router-dom';
import { getTasks } from '../api';
import { useUser } from '../hooks/useUse';
// import { appRoutes } from '../lib/appRoutes';

export default function MainPage (){
  const [cards, setCards] = useState(null); 
  const [isLoaded, setIsLoaded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);

  // const {userData} = useUser();
  const {userData} = useUser();

// const addCard = async () => {
  //   let newCard = [
  //     ...newTask, data: selected
  //   ]
  // }


  // загрузка данных в карточки
  useEffect(() => {
    getTasks({token: userData.token})
    .then((data) => {
      // console.log(data.tasks);
      setCards(data.tasks);
    })
    .catch((error) => {
      setGetCardsError(error.message);
    })
    .finally(() => {
      setIsLoaded(false);
    })
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
      <PopNewCard />
      <Header addCard={addCard} />
      {getCardsError ? (
        <p style={{ color: "red" }}>{getCardsError}</p>
      ) : (
        <Main cardList={cards} isLoaded={isLoaded} />
      )}
    </Wrapper>
    </>
);
}