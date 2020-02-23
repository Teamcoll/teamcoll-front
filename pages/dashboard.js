import { Layout } from "Component/Layout";
import styled from "styled-components";
import Ball from "Component/Ball";

const Card = styled.article`
  background-color: white;
  border-radius: 5px;
  padding: 10px 10px;
  border: 1px solid black;
`;

const TopHeader = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    margin: 6px 0px;
    font-size: 2em;
    margin-left: 10px;
  }
`;

const NoticeCard = styled(Card)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    height: 50px;

    img.profile {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }

    h3 {
      margin: 0px 0px 0px 10px;
    }

    .notice-meta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: auto;
      height: 50px;
      .number {
        font-size: 17px;
        text-align: right;
        font-weight: 100;
      }
      .date {
        font-size: 12px;
        letter-spacing: -0.05em;
      }
    }
  }
`;

const TodoCard = styled(Card)`
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }

  header {
    padding-bottom: 15px;
    border-bottom: 0.5px solid black;
    margin-bottom: 15px;
    h3 {
      margin: 0px;
      letter-spacing: -0.02em;
      font-size: 1.1em;
      .role {
        display: block;
        margin-right: 5px;
        padding: 0px 5px;
        border-radius: 3px;
        background-color: #e3e3e3;
        font-weight: normal;
        font-size: 0.85em;
        letter-spacing: 0;
      }
    }
  }
  p {
    .date-type {
      display: inline-block;
      margin-right: 5px;
      padding: 0px 5px;
      border-radius: 3px;
      background-color: #e3e3e3;
    }
  }
`;

const ContactCard = styled(Card)`
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }

  & li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }

    span.role {
      display: block;
      margin: 0px 0.8em;
      font-size: 0.75em;
      width: 5em;
      letter-spacing: -0.015em;
    }
  }

  & img.profile {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  section {
    flex-basis: 33.3%;

    &:first-of-type {
      margin-left: 0px;
      margin-right: 50px;
    }

    &:last-child {
      margin-left: 50px;
      margin-right: 0px;
    }
  }
`;

const DashBoard = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>Dashboard</h2>
      </TopHeader>
      <Grid>
        <section>
          <h3>Notice</h3>
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
            <p>관리자 입니다. 감사합니다. 테스트 문장을 작성해 보았습니다.</p>
          </NoticeCard>
        </section>
        <section>
          <h3>Todo</h3>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Developer</span> Meeting for next
                version.
              </h3>
            </header>
            <p>
              <span className="date-type">At...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Design</span> 디자인 시안 검토
              </h3>
            </header>
            <p>
              <span className="date-type">Until...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Marketting</span> 미팅전, 서류 정리 및
                제안서 작성하고 검사맡고 확인하고 뭐하고 저거하고 뭐하고
              </h3>
            </header>
            <p>
              <span className="date-type">Until...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
        </section>
        <section>
          <h3>Team mate</h3>
          <ContactCard>
            <ul>
              <li>
                <img
                  className="profile"
                  src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png"
                  alt="profile"
                />
                <span className="role">CEO</span> 한승민
              </li>
              <li>
                <img
                  className="profile"
                  src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png"
                  alt="profile"
                />
                <span className="role">Developer</span> 홍진백
              </li>
            </ul>
          </ContactCard>
        </section>
      </Grid>
    </Layout>
  );
};

export default DashBoard;
