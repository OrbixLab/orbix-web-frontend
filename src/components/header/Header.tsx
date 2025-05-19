import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 2rem 0rem;
  display: flex;
  height: 70vh;
  background-color: dimgray;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <p>is it rendering something</p>
    </HeaderContainer>
  );
};

export default Header;
