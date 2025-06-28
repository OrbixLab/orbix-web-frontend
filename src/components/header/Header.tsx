import Logo from "./components/logo";
import {
  HeaderContainer,
  VideoContainer,
  HeaderTitle,
  HeaderButton,
} from "./components/styledComponents";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderTitle>Play All Kinds of Games</HeaderTitle>
      <HeaderTitle>With Orbix Smart Board</HeaderTitle>
      <VideoContainer autoPlay loop muted playsInline>
        <source src="/VideoHeader.mp4" type="video/mp4" />
      </VideoContainer>
      <HeaderButton>Reserve Now</HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
