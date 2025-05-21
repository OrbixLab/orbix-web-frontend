import styled from "styled-components";

const LogoImg = styled.img`
  margin: 0px 0px 0px 15px;
  width: 44.45px;
  height: 35px;
`;

const LogoFont = styled.h1`
  font-size: 1.6rem;
  color: white;
  margin: 2px 0px 0px 0px;
  color: rgba(128, 209, 95, 1);
`;

const LogoContainer = styled.div`
  font-family: "Roboto Flex", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin: 1rem;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={"/logo3.png"} alt="Logo" />
      <LogoFont>ORBIX</LogoFont>
    </LogoContainer>
  );
};

export default Logo;
