import Card from '../Card/Card';
import { Cards, ColumnTitle, MainColumn } from './Column.styled';

// cardList передаем как проп из Main
function Column({ title, cardList }) {
  return (

    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((item) => (
          <Card
            id = {item.id }
            name={item.title}
            theme={item.theme}
            date={item.date}
            key={item.id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
