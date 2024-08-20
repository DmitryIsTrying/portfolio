import styled from "styled-components";
import "./App.css";
import InfoBar from "./layout/infoBar/InfoBar";
import { NavBar } from "./layout/navBar/NavBar";
import { Header } from "./layout/sections/header/Header";
import { SectionService } from "./layout/sections/sectionService/SectionService";
import { FlexWrapper } from "./components/FlexWrapper";
import { SectionPrice } from "./layout/sections/sectionPrice/SectionPrice";
import { SectionRecommend } from "./layout/sections/sectionRecommend/SectionRecommend";
import { SectionEducation } from "./layout/sections/sectionEducation/SectionEducation";
import { SectionWHistory } from "./layout/sections/sectionWHistory/SectionWHistory";
import { SectionPortfolio } from "./layout/sections/sectionPortfolio/SectionPortfolio";
import { SectionBlog } from "./layout/sections/sectionBlog/SectionBlog";
import { GridWrapper } from "./components/GridWrapper";

function App() {
  return (
    <div className="App">
      <GridWrapper NoGap NRColumns="330px auto 135px">
        <InfoBar />
        <Main>
          <Header />
          <FlexWrapper
            style={{ maxWidth: "970px" }}
            gap="70px"
            direction="column"
            color="transparent"
          >
            <SectionService />
            <SectionPrice />
            <SectionRecommend />
            <SectionEducation />
            <SectionWHistory />
            <SectionPortfolio />
            <SectionBlog />
            <footer></footer>
          </FlexWrapper>
        </Main>
        <NavBar />
      </GridWrapper>
    </div>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2;
`;

export default App;
