import Header from "./components/header/Header";
import styled from "styled-components";
import SlideComponent from "./components/slide-component/slideComponent";
import modularImg from "/Orbix.113.png";
import multigameImg from "/Orbix.114.png";
import cardImg from "/Render1.jpeg";
import controllerImg from "/Orbix.91.1.png";
import createImg from "/studio1.jpeg";
import marketImg from "/studio2.jpeg";

const AppContainer = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SlideComponent
        slideDirection="right"
        headerTitle="MODULAR"
        imgSrc={modularImg}
        imgHeight="auto"
        description="Each Orbix board is powered independently, allowing it to function either as part of a larger system or on its own."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="MULTIGAME"
        imgSrc={multigameImg}
        description="Orbix is a modular tabletop gaming console that supports timeless classics, immersive role-playing games, and an ever-growing library of innovative new titles."
      />
      <SlideComponent
        slideDirection="right"
        headerTitle="CARDS"
        imgSrc={cardImg}
        description="Orbix goes beyond smart board pieces by also supporting smart cards, expanding gameplay possibilities in exciting ways."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="CONTROLLER"
        imgSrc={controllerImg}
        imgHeight="auto"
        description="Orbix includes a companion app that connects seamlessly with the board, unlocking endless game-enhancing features and dynamic interactions."
      />
      <SlideComponent
        slideDirection="right"
        headerTitle="CREATE YOUR OWN GAME"
        imgSrc={createImg}
        imgHeight="auto"
        description="Design your own games using our intuitive tools, and share them with the Orbix community through the integrated marketplace."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="ORBIX MARKET"
        imgSrc={marketImg}
        imgHeight="auto"
        description="Access a wide selection of free and premium games on the Orbix Market. Download and play instantly on your board."
      />
    </AppContainer>
  );
}

export default App;
