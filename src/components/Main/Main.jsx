import Column from '../Column/Column';
import { Container } from '../Common/Common.styled';
// import * as S from './Main.styled';


const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово'
];

function Main({ cardList, isLoaded }) {
  // props (cardList)
  return (
    // <S.MainStyled>
    <main className="main">
      <Container>
        <div className="main__block">
          <div className="main__content">
            {/* тернарный оператор */}
            {isLoaded
              ? 'Loading...'
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={cardList.filter((card) => card.status === item)}
                  />
                ))}
          </div>
        </div>
      </Container>
    </main>
    // </S.MainStyled>
  );
}

export default Main;
