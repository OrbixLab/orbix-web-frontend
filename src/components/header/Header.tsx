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

const VideoContainer = styled.video`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  position: absolute;
  right: 0;
`;

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
