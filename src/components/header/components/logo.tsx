import { LogoContainer, LogoImg, LogoFont } from "./styledComponents";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={"/logo3.png"} alt="Logo" />
      <LogoFont>ORBIX</LogoFont>
    </LogoContainer>
  );
};

export default Logo;
