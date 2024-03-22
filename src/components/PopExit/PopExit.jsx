import { Link } from 'react-router-dom';
import * as S from './PopExit.styled'
import { appRoutes } from '../../lib/appRoutes';
import { useUser } from '../../hooks/useUse';

function PopExit() {

  const {logoutUser} = useUser();

  function LogOut () {
    // setUserData(null);
    logoutUser(null);
  }

  return (
    <div className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <button onClick={LogOut} className="pop-exit__exit-yes _hover01" id="exitYes">
                {/* <Link to={appRoutes.LOGIN}>Да, выйти</Link> */}
              Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={appRoutes.MAIN}>Нет, остаться</Link>
              </button>
            </S.PopExitFormGroup>
          </form>
        
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
}

export default PopExit;
