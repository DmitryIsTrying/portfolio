import styled from "styled-components";
import "./App.css";
import InfoBar from "./layout/infoBar/InfoBar";
import { NavBar } from "./layout/navBar/NavBar";
import { Header } from "./layout/sections/header/Header";
import { FlexWrapper } from "./components/FlexWrapper";

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Main>
        <Header />
        <section
          style={{ height: "100vh", backgroundColor: "yellowgreen" }}
        ></section>
        <section
          style={{ height: "100vh", backgroundColor: "yellowgreen" }}
        ></section>
        <section
          style={{ height: "100vh", backgroundColor: "yellowgreen" }}
        ></section>
      </Main>
      <NavBar />
    </div>
  );
}

const Main = styled.main`
  min-width: 480px;
  margin: 0 135px 0 335px;
`;

export default App;
