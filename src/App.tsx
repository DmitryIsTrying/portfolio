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

function App() {
  return (
    <div className="App">
      <GridWrapperMain>
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
            <footer></footer>
          </FlexWrapper>
        </Main>
        <NavBar />
      </GridWrapperMain>
    </div>
  );
}

const GridWrapperMain = styled.div`
  display: grid;
  grid-template-columns: 305px auto 108px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2;
  margin: 0 27px 0 30px;
`;

export default App;
