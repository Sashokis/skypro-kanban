import { WrapperStyled } from "./Wrapper.styled";

function Wrapper({ children }) {
  return <>
  <WrapperStyled>
    {children}
  </WrapperStyled>
  </>
}

export default Wrapper;
