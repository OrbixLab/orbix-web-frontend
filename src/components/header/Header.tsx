import styled from "styled-components";
import Logo from "./components/logo";

const HeaderContainer = styled.div`
  margin: 2rem 0rem;
  display: flex;
  height: 70vh;
  background-color: dimgray;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
