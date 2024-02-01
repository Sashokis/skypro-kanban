import { useState } from 'react';
import { Container } from '../Common/Common.styled';
import { HeaderBlock, HeaderLogo, HeaderNav, HeaderStyled, PopUserSetMail, PopUserSetName } from './Header.styled';

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);

  // change value button
  function togglePopUp() {
    setIsOpened((prev) => !prev);
  }

  return (
    <HeaderStyled>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          </HeaderLogo>
          {/* <HeaderLogo> */}
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          {/* </HeaderLogo> */}
          <HeaderNav>
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={addCard}
            >
              Создать новую задачу
            </button>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && (
              <div className="header__pop-user-set pop-user-set">
                {/* <a href="">x</a> */}
                <PopUserSetName> Ivan Ivanov </PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
