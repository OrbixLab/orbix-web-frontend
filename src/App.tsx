import Header from "./components/header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 95vw;
  height: 3500px;
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
