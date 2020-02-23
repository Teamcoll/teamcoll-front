import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  border-radius: 5px;
  padding: 10px 10px;
  border: 1px solid black;
`;

export const NoticeCard = styled(Card)`
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

export const TodoCard = styled(Card)`
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

export const ContactCard = styled(Card)`
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
