import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const TestWrapper = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;

  & form {
    margin: 30px 0px;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 150px;
`;

const Signup = () => {
  const map = {
    legend: "로그인",
    target: "http://192.168.0.14:8080/user/login",
    method: "POST",
    item: [
      { id: "email", text: "이메일", type: "email", name: "email" },
      { id: "password", text: "비밀번호", type: "password", name: "pwd" },
      { id: "name", text: "이름", type: "text", name: "name" },
      { id: "name", text: "이름", type: "text", name: "name" }
    ]
  };
  return (
    <form target={map.target} method={map.method}>
      <fieldset>
        <legend>{map.legend}</legend>
        {map.item.map((item, key) => (
          <p key={key}>
            <Label for={item.id}>{item.text}</Label>
            <input type={item.type} id={item.id} name={item.name}></input>
          </p>
        ))}
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
};

const Signin = () => {
  const map = {
    legend: "로그인",
    target: "http://192.168.0.14:8080/user/login",
    method: "POST"
  };

  // STATE
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [resData, setResData] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };
  const onPwChange = e => {
    setPwd(e.target.value);
  };
  const onSubmitCall = async e => {
    const res = await axios.post("http://192.168.0.14:8080/user/login", {
      email: email,
      pwd: pwd
    });
    setResData(await res.data);
  };

  return (
    <form target={map.target} method={map.method}>
      <fieldset>
        <legend>{map.legend}</legend>
        <p>
          <Label for="email">이메일</Label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={e => onEmailChange(e)}
          ></input>
        </p>
        <p>
          <Label for="password">비밀번호</Label>
          <input
            type="password"
            id="password"
            name="pwd"
            onChange={e => onPwChange(e)}
          ></input>
        </p>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            onSubmitCall();
          }}
        >
          submit
        </button>
        <p>{resData}</p>
      </fieldset>
    </form>
  );
};

const Test = props => {
  return (
    <TestWrapper>
      <h1>API Test Page</h1>
      <Signup />
      <Signin />
    </TestWrapper>
  );
};

export default Test;
