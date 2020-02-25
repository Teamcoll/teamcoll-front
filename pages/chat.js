import { Layout } from "Component/Layout";
import Ball from "Component/Ball";
import { TopHeader } from "Component/Header";
import { Grid2 } from "Component/Grid";
import { ContactCard } from "Component/Card";
import styled from "styled-components";

const ChatWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 10px 0px;
  padding: 0px;
  overflow-y: scroll;
  height: 500px;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px;
  }
`;

const ChatingItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
  & img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  & .chat-text-wrapeer {
    span {
      display: inline-block;
      margin-left: 5px;
      font-size: 0.8em;
    }
    div {
      padding: 5px;
      border-radius: 5px;
      background-color: white;
    }
  }
`;

const TestMessage = [
  {
    username: "홍길동",
    text: "안녕하세요."
  },
  {
    username: "김상수",
    text: "네 안녕하세요."
  },
  {
    username: "김상수",
    text: "네 안녕하세요."
  },
  {
    username: "김야근",
    text: "야근하다가 죽겠네"
  },
  {
    username: "임소신",
    text:
      "김야근 너 저번에 뭐뭐뭐 해달란거 했어? 왜 그 뭐뭐뭐 있자나. 그 뭐뭐뭐를 안하면 너 또 야근이래 그런줄 알어. 글고 이거 이거 이거 꼭 해줘, 다음에 결재맡아야 해. 꼭이야. 알겠어? 이거보면 뭐라뭐라뭐라 라고 대답해주삼~ "
  },
  {
    username: "강심장",
    text: "걍 날 죽여"
  },
  {
    username: "이뭐래",
    text: "뭐래"
  },
  {
    username: "강성현",
    text: "....."
  },
  {
    username: "이밥줘",
    text: "배고파."
  },
  {
    username: "김밥",
    text: "밥 준다."
  }
];

const ChatBox = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  textarea {
    width: 100%;
    background-color: white;
    border: 1px solid black;
    resize: none;
    border-radius: 5px;
  }

  button {
    width: 100px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid black;
  }
`;

const Chat = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>Chat</h2>
      </TopHeader>
      <Grid2>
        <section>
          <ChatWrapper>
            {TestMessage.map(item => (
              <ChatingItem>
                <img src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png" />
                <div className="chat-text-wrapeer">
                  <span>{item.username}</span>
                  <div>{item.text}</div>
                </div>
              </ChatingItem>
            ))}
          </ChatWrapper>
          <ChatBox>
            <textarea></textarea>
            <button type="submit">보내기</button>
          </ChatBox>
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
      </Grid2>
    </Layout>
  );
};

export default Chat;
