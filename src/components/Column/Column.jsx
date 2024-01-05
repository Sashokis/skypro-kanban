import Card from "../Card/Card";

function Column({title}) {
    return (
        <div className="main__column">
            <div className="column__title">
              <p>{title}</p>
            </div>
            <div className="cards">
              <Card name = {"Название нашей задачи"}
                theme = {"Тема"}
                date = {"01.01.24"}
              />

              <Card name = {"Название нашей задачи"}
                theme = {"Тема"}
                date = {"31.12.23"}
              />

              <Card name = {"Название нашей задачи"}
                theme = {"Тема"}
                date = {"12.09.23"}
              />
              
            </div>
          </div>
    );
}

export default Column;