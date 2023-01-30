import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import NavBar from "./global/Navbar";

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
html, body {
    font-size: 15px;
    font-weight: 400;
    padding: 0;
    margin: 0;
}
body {
    height: 100vh;
    width: 100vw;
}
* {
    box-sizing: border-box;
}
div {
    height: 100%;
    width: 100%;
}
a {
    text-decoration: none;
    color: inherit;
}
`;
