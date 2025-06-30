import Logo from "./components/logo";
import {
  HeaderContainer,
  VideoContainer,
  HeaderTitle,
  HeaderButton,
} from "./components/styledComponents";
import videHeader from "/VideoHeader.mp4";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderTitle>Play All Kinds of Games</HeaderTitle>
      <HeaderTitle>With Orbix Smart Board</HeaderTitle>
      <VideoContainer autoPlay loop muted playsInline>
        <source src={videHeader} type="video/mp4" />
      </VideoContainer>
      <HeaderButton>Reserve Now</HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
