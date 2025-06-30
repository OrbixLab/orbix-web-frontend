import { LogoContainer, LogoImg, LogoFont } from "./styledComponents";
import logo from "/logo3.png";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="Logo" />
      <LogoFont>ORBIX</LogoFont>
    </LogoContainer>
  );
};

export default Logo;
