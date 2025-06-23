import Header from "./components/header/Header";
import styled from "styled-components";
import SlideComponent from "./components/slide-component/slideComponent";

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
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="MULTIGAME"
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
      <SlideComponent
        slideDirection="right"
        headerTitle="CARDS"
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="CONTROLLER"
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
      <SlideComponent
        slideDirection="right"
        headerTitle="CREATE YOUR OWN GAME"
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
      <SlideComponent
        slideDirection="left"
        headerTitle="ORBIX MARKET"
        imgSrc="/Render1.jpeg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tellus ullamcorper, efficitur odio at, consectetur ligula. Maecenas euismod lorem quis faucibus varius. Etiam quis velit semper, tincidunt velit et, molestie metus. Suspendisse feugiat est non dolor scelerisque tincidunt. In sed nulla sed erat fringilla facilisis. Proin aliquet tortor lacinia fermentum bibendum. Ut et augue pellentesque, volutpat elit id, sollicitudin velit. Integer laoreet nisi quis lacinia tempus."
      />
    </AppContainer>
  );
}

export default App;
