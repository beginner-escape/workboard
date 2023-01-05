import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalBackground>
        <Screen>
          <TopBar />
          <Router />
        </Screen>
      </GlobalBackground>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body {
    font-size: 15px;
    font-weight: 400;
    padding: 0;
    margin: 0;
}
`;

const GlobalBackground = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgb(80 80 80 / 10%);
  width: 375px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 44px;
  background-color: #1f10d2;
  top: 0;
`;
