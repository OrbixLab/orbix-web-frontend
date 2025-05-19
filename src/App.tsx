import Header from "./components/header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 1500px;
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
