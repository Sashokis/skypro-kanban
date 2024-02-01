import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import PopExit from './components/PopExit/PopExit';
import PopBrowse from './components/PopBrowse/PopBrowse';

import PopNewCard from './components/PopNewCard/PopNewCard';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { useEffect, useState } from 'react'; // useState - Hook
import { cardList } from './data';
import { GlobalStyle } from './Global.styled';

function App() {
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
      <GlobalStyle />
      <Wrapper>
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end*/}
        <Header addCard={addCard} />
        <Main cardList={cards} isLoaded={isLoaded} />
      </Wrapper>
    </>
  );
}

export default App;
