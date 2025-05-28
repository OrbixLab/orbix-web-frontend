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
      <SlideComponent slideDirection="right" headerTitle="MODULAR" />
      <SlideComponent slideDirection="left" headerTitle="MULTIGAME" />
      <SlideComponent slideDirection="right" headerTitle="CARTAS" />
      <SlideComponent slideDirection="left" headerTitle="CONTROL" />
      <SlideComponent
        slideDirection="right"
        headerTitle="CREATE YOUR OWN GAME"
      />
      <SlideComponent slideDirection="left" headerTitle="ORBIX MARKET" />
    </AppContainer>
  );
}

export default App;
