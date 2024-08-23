import styled from "styled-components";
import "./App.css";
import InfoBar from "./layout/infoBar/InfoBar";
import { NavBar } from "./layout/navBar/NavBar";
import { Header } from "./layout/sections/header/Header";
import { SectionService } from "./layout/sections/sectionService/SectionService";
import { SectionPrice } from "./layout/sections/sectionPrice/SectionPrice";
import { SectionRecommend } from "./layout/sections/sectionRecommend/SectionRecommend";
import { SectionEducation } from "./layout/sections/sectionEducation/SectionEducation";
import { SectionWHistory } from "./layout/sections/sectionWHistory/SectionWHistory";
import { SectionPortfolio } from "./layout/sections/sectionPortfolio/SectionPortfolio";
import { SectionBlog } from "./layout/sections/sectionBlog/SectionBlog";
import { SectionForm } from "./layout/sections/sectionForm/SectionForm";
import { SectionMap } from "./layout/sections/sectionMap/SectionMap";
import { SectionLogos } from "./layout/sections/sectionLogos/SectionLogos";
import { Footer } from "./layout/sections/footer/Footer";

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Main>
        <Container>
          <Header />
          <SectionService />
          <SectionPrice />
          <SectionRecommend />
          <SectionEducation />
          <SectionWHistory />
          <SectionPortfolio />
          <SectionBlog />
          <SectionForm />
          <SectionMap />
          <SectionLogos />
          <Footer />
        </Container>
      </Main>
      <NavBar />
    </div>
  );
}

export default App;

const Main = styled.main`
  padding: 0 105px 0 305px;
`;

const Container = styled.div`
  max-width: 1030px;
  min-width: 380px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px 0 30px;
`;
