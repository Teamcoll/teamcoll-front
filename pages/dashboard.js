import { Layout } from "Component/Layout";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px 10px;
  border: 1px solid black;
`;

const Devider = styled.hr`
  width: 100%;
  height: 0.5px;
  background-color: black;
  border: none;
`;

const NoticeCard = styled(Card)``;
const TodoCard = styled(Card)`
  margin-bottom: 10px;
  &:last-child {
    margin: 0;
  }
`;
const ContactCard = styled(Card)``;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  article {
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
      <h2>Dashboard</h2>
      <Devider />
      <Grid>
        <article>
          <h3>Notice</h3>
          <NoticeCard>
            <p>관리자</p>
            <p>관리자 입니다. 감사합니다.</p>
          </NoticeCard>
        </article>
        <article>
          <h3>Todo</h3>
          <TodoCard>할거 1</TodoCard>
          <TodoCard>할거 2</TodoCard>
          <TodoCard>할거 3</TodoCard>
          <TodoCard>할거 4</TodoCard>
        </article>
        <article>
          <h3>Team mate</h3>
          <ContactCard>
            <p>대표 한승민</p>
            <p>개발 홍진백</p>
          </ContactCard>
        </article>
      </Grid>
    </Layout>
  );
};

export default DashBoard;
