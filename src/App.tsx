import styled from "styled-components";
import "./App.css";
import InfoBar from "./layout/infoBar/InfoBar";
import { NavBar } from "./layout/navBar/NavBar";
import { Header } from "./layout/sections/header/Header";
import { SectionService } from "./layout/sections/sectionService/SectionService";
import { FlexWrapper } from "./components/FlexWrapper";
import { SectionPrice } from "./layout/sections/sectionPrice/SectionPrice";
import { SectionRecommend } from "./layout/sections/sectionRecommend/SectionRecommend";

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Main>
        <Header />
        <FlexWrapper gap="70px" direction="column" color="transparent">
          <SectionService />
          <SectionPrice />
          <SectionRecommend />
          <footer></footer>
        </FlexWrapper>
      </Main>
      <NavBar />
    </div>
  );
}

const Main = styled.main`
  min-width: 650px;
  margin: 0 235px 0 435px;
`;

export default App;
