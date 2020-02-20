import styled from "styled-components";
// import { LandingHeader } from "Component/Header";
import { theme } from "Component/style/theme";
import { loremipsum } from "Component/map";

const LandingSection = styled.section`
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Video = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true,
  id: "landing-background-video"
})`
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transform: translateX(0px);
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

const LandingWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
`;

const LandingHeader = styled.header`
  width: 60%;
  height: calc(100vh - 2 * ${theme.Norm.verticalSpace});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: ${theme.ContentsSection.padding};

  h2 {
    margin: 0px;
    font-size: 2.5em;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    font-weight: bolder;
  }

  p {
    margin: 0px;
    font-size: 1.5em;
  }
`;

const LandingArticle = styled.article`
  width: 40%;
  height: calc(100vh - 2 * ${theme.Norm.verticalSpace});
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  padding: ${theme.ContentsSection.padding};
  background: rgba(0, 0, 0, 0.05);
`;

const Index = () => {
  return (
    <LandingSection>
      <Video theme={theme}>
        <source src="video/landing-background-video.mp4" type="video/mp4" />
      </Video>

      <LandingWrapper theme={theme}>
        <LandingHeader theme={theme}>
          <h2 id="landing-catch">
            Share with team
            <br />
            what important things are.
          </h2>
          <p id="landing-introduction">
            Simpe, but powerful team board. <i>"TEAMCOLL"</i>
          </p>
        </LandingHeader>

        <LandingArticle theme={theme}>
          <form>
            <input type="email" />
            <input type="password" />
            <button type="submit">Sign-in</button>
          </form>
        </LandingArticle>
      </LandingWrapper>
    </LandingSection>
  );
};

export default Index;
