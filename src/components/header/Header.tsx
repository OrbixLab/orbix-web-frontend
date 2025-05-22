import Logo from "./components/logo";
import { HeaderContainer, VideoContainer } from "./components/styledComponents";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <VideoContainer autoPlay loop muted playsInline>
        <source src="/chessUpVIdeo.mp4" type="video/mp4" />
      </VideoContainer>
    </HeaderContainer>
  );
};

export default Header;
