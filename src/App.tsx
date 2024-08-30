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
import { layoutsTheme } from "./styles/Theme.styled";

type ContainerPropsType = {
  paddingMedia: number;
};

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Main>
        <Container paddingMedia={15}>
          <Header />
          <SectionService />
          <SectionPrice />
          <SectionRecommend />
          <SectionEducation />
          <SectionWHistory />
          <SectionPortfolio />
          <SectionBlog />
          <SectionForm />
        </Container>
        <Container paddingMedia={0}>
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
  @media ${layoutsTheme.media.tablet} {
    padding: 0;
  }
`;

const Container = styled.div<ContainerPropsType>`
  max-width: 1030px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media ${layoutsTheme.media.tablet} {
    padding: 0 ${(props) => props.paddingMedia}px;
  }
`;
