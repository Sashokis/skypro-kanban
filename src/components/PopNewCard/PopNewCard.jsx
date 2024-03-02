import { useState } from 'react';
import { Calendar } from '../Calendar/Calendar';


function PopNewCard() {

  
 const [selected, setSelected] = useState();

  // функция обновления состояния 
  const handleInputChange = (e) => {
  const { name, value } = e.target; 

    setNewTask({
    ...newTask, 
    [name]: value, 
  });
  };

  const [newTask, setNewTask] = useState({
        title: "",
        theme: "",
        description: "",

  });

  // 

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              ✖
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                      value={newTask.title}
                      onChange={handleInputChange}
                    className="form-new__input"
                    type="title"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                       value={newTask.description}
                      onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>

              
              <div className="pop-new-card__calendar calendar">
                  <Calendar selected = {selected} setSelected = {setSelected}/>
              </div>
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="prod_checbox">  
                    <div className="radio-toolbar"> 

                        <input type="radio" id="radio1" name="topic" onChange={handleInputChange} value="Web Design" checked />
                        <label htmlFor="radio1">Web Design</label>
                        
                        <input type="radio" id="radio2" name="topic" onChange={handleInputChange} value="Research" />
                        <label htmlFor="radio2">Research</label>
                        
                        <input type="radio" id="radio3" name="topic" onChange={handleInputChange} value="Copywriting" />
                        <label htmlFor="radio3">Copywriting</label>
                    </div> 
                </div>               
{/* 
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div> */}

              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;


