import Header from "./components/header/Header";
import styled from "styled-components";
import SlideComponent from "./components/slide-component/slideComponent";

const AppContainer = styled.div`
  width: 100vw;
  height: 1500px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SlideComponent slideDirection="right" />
      <SlideComponent slideDirection="left" />
    </AppContainer>
  );
}

export default App;
