import { Layout } from "Component/Layout";
import { TopHeader } from "Component/Header";
import Ball from "Component/Ball";
import { Grid2 } from "Component/Grid";
import { NoticeCard, TodoCard, ContactCard } from "Component/Card";
import styled from "styled-components";
import { CardForm } from "Component/Form";

const Spacing = styled.div`
  width: 100%;
  height: 50px;
`;

const WriteForm = styled(CardForm)`
  /* width: 100%; */
  & label {
    font-size: 1.5em !important;
    font-weight: bold;
  }
  fieldset {
    width: 100%;
    background-color: transparent;
    border: none;
  }
  & textarea {
    width: 100%;
    height: 300px;
    outline: none;
    border: 1px solid gray;
    resize: none;
    border-radius: 5px;
    padding: 5px;
  }

  & p.form-wrapper {
    margin: 0px;
  }

  & div.form-btn-wrapper {
    margin: 10px 0px 0px 0px;
    text-align: right;
  }

  & button {
    margin-bottom: 0px;
    &:first-child {
      margin-right: 10px;
    }
    width: 91px;
    display: inline-block;
  }
`;

const NoticeWrite = props => (
  <WriteForm>
    <fieldset>
      <p className="form-wrapper">
        <label for="writeForm">Write</label>
        <textarea id="writeForm"></textarea>
      </p>
      <div className="form-btn-wrapper">
        <button type="submit">작성</button>
        <button>취소</button>
      </div>
    </fieldset>
  </WriteForm>
);

const Notice = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>Notice</h2>
      </TopHeader>
      <Grid2>
        <section>
          <Spacing />
          <NoticeCard>
            <header>
              <img
                className="profile"
                src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png"
                alt="profile"
              />
              <h3>관리자</h3>
              <div className="notice-meta">
                <div className="number">#2</div>
                <div className="date">2020.01.28. 11:00</div>
              </div>
            </header>
            <p>
              새해들어 우한 폐렴이 유행하고 있다하니, 모두들 건강 잘 챙기시고,
              손씻기 철저히 부탁드립니다. 이번에 뒷풀이를 하려고 하는데, 오실
              분은 저에게 꼭 연락주세요.
            </p>
          </NoticeCard>
        </section>
        <section>
          <Spacing />
          <NoticeWrite />
        </section>
      </Grid2>
    </Layout>
  );
};

export default Notice;
