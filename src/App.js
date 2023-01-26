import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/global/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Router />
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
