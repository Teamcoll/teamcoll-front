import { useState } from "react";
import styled from "styled-components";
// import { LandingHeader } from "Component/Header";
import { theme } from "Component/style/theme";
import { CardForm } from "Component/Form";

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
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LandingHeader = styled.header`
  /* width: 60%; */
  flex-grow: 6;
  height: calc(100vh - 2 * ${theme.Norm.verticalSpace});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: ${theme.ContentsSection.padding};
  background: rgba(0, 0, 0, 0.05);

  h2 {
    margin: 0px;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    font-weight: bolder;
  }

  p {
    margin: 0px;
    font-size: 1.5em;
  }
`;

const LandingForm = styled(CardForm)`
  height: 100vh;
  & fieldset {
    width: 300px;
  }
`;

const LandingArticle = styled.article`
  /* width: 40%; */
  flex-grow: 4;
  /* height: calc(100vh - 2 * ${theme.Norm.verticalSpace}); */
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  /* padding: ${theme.ContentsSection.padding}; */
  background: white;
`;

const Login = () => (
  <LandingForm theme={theme} action="#" method="post">
    <fieldset>
      <legend>Sign in</legend>
      <p className="form-wrapper">
        <label for="login-email" id="login-email-label">
          E-mail
        </label>
        <input type="email" id="login-email" />
      </p>
      <p className="form-wrapper">
        <label for="login-password" id="login-password-label">
          Password
        </label>
        <input type="password" id="login-password" />
      </p>
      <button type="submit">Submit</button>
    </fieldset>
  </LandingForm>
);

const Signup = () => {
  const [type, setType] = useState(0);

  const defaultMode = (
    <>
      <button
        onClick={e => {
          e.preventDefault();
          return setType(1);
        }}
      >
        If you are leader of the team.
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          return setType(2);
        }}
      >
        If you are member of the team
      </button>
    </>
  );

  const leaderMode = (
    <fieldset>
      <legend>Create team</legend>
      <p className="form-wrapper">
        <label for="signup-teamname" id="signup-teamname-label">
          Team name
        </label>
        <input type="text" id="signup-teamname" />
      </p>
      <p className="form-wrapper-inline">
        <input type="checkbox" id="signup-terms" />
        <label terms for="signup-terms" id="signup-terms-label">
          I agree to terms of services.
        </label>
      </p>
      <button
        onClick={e => {
          e.preventDefault();
          return setType(0);
        }}
      >
        Back
      </button>
      <button type="submit">Done</button>
    </fieldset>
  );

  const memberMode = (
    <fieldset>
      <legend>Invitation</legend>
      <button
        onClick={e => {
          e.preventDefault();
          return setType(0);
        }}
      >
        Back
      </button>
    </fieldset>
  );

  return (
    <LandingForm theme={theme} action="#" method="post">
      <fieldset>
        <legend>Sign up</legend>
        <p className="form-wrapper">
          <label for="login-email" id="signup-email-label">
            E-mail
          </label>
          <input type="email" id="signup-login-email" />
        </p>
        <p className="form-wrapper">
          <label for="signup-password" id="signup-password-label">
            Password
          </label>
          <input type="password" id="signup-password" />
        </p>
        <p className="form-wrapper">
          <label for="signup-name" id="signup-name-label">
            name
          </label>
          <input type="text" id="signup-name" />
        </p>
        {type === 0 ? defaultMode : null}
      </fieldset>
      {type === 0 ? null : type === 1 ? leaderMode : memberMode}
    </LandingForm>
  );
};

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
            Simple, but powerful team board. <i>"TEAMCOLL"</i>
          </p>
        </LandingHeader>

        <LandingArticle theme={theme}>
          <Signup />
        </LandingArticle>
      </LandingWrapper>
    </LandingSection>
  );
};

export default Index;
