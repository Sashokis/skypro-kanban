import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; 
import { appRoutes } from '../lib/appRoutes';
import { useState } from 'react';
import { register } from '../api';

const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}

div,
button,
a {
  font-family: "Roboto", sans-serif;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #EAEEF6;
}

.container-signup {
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
}

._hover01:hover {
  background-color: #33399b;
}

.modal {
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__block {
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}
.modal__ttl h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
}
.modal__form-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal__form-login input:not(:last-child) {
  margin-bottom: 7px;
}
.modal__input {
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
}
.modal__input::-moz-placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
.modal__input::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
.modal__btn-signup-ent {
  width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
}
.modal__btn-signup-ent a {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__form-group {
  text-align: center;
}
.modal__form-group p,
.modal__form-group a {
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
}
.modal__form-group a {
  text-decoration: underline;
}

@media screen and (max-width: 375px) {
  .modal {
    background-color: #FFFFFF;
  }
  .modal__block {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
  .modal__btn-signup-ent {
    height: 40px;
  }
}

`;



export default function RegisterPage ({setUserData}){

// переадресация между страницами 
let navigate = useNavigate();

// данные по умолчаню 
const registerForm = {
  name: '',
  login: '',
  password: '',
}
const [ registerData, setRegisterData ] = useState(registerForm);

const handleRegister = async (e) => {
  e.preventDefault()
  await register(registerData).then((data) => {
    setUserData(data.user);
   }).then(() => {
    navigate(appRoutes.MAIN);
  })
  .catch((error) => {
    console.log(error);
  })
}

// функция обновления состояния 
const handleInputChange = (e) => {
  const { name, value } = e.target; 

   setRegisterData({
    ...registerData, 
    [name]: value, 
  });
};

return (
    <>
    <style>{styles}</style>
    <div className="wrapper">
  <div className="container-signup">
    <div className="modal">
      <div className="modal__block">
        <div className="modal__ttl">
          <h2>Регистрация</h2>
        </div>
        <form className="modal__form-login" id="formLogUp" action="#">
          <input
            className="modal__input first-name"
            type="text"
            id="first-name"
            placeholder="Имя"

            value={registerData.name}
            onChange={handleInputChange}
            name="name"  
          />
          <input
            className="modal__input login"
            type="text"
            name="login"
            value={registerData.login}
            onChange={handleInputChange}
            id="loginReg"
            placeholder="Эл. почта"
          />
          <input
            className="modal__input password-first"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            id="passwordFirst"
            placeholder="Пароль"
          />
          <button onClick={handleRegister} className="modal__btn-signup-ent _hover01" id="SignUpEnter">
            {/* <Link to = {appRoutes.MAIN}>Зарегистрироваться</Link>{" "} */}
            Зарегистрироваться
          </button>
          <div className="modal__form-group">
            <p>
              Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
);
}