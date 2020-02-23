import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 5px 0px;
    background-color: white;
  }
  & fieldset {
    border: 1px solid gray;
    border-radius: 5px;

    animation-name: fade-in;
    animation-duration: 1s;
  }

  & legend {
    padding: 20px;
  }

  & p.form-wrapper {
    margin: 0px 0px 15px 0px;
    input {
      width: calc(100% - 10px);
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px 5px;
      background-color: white;
    }
    label {
      display: ${props => (props.terms ? "inline-block" : "block")};
      margin-bottom: 8px;
      font-size: 0.8em;
    }
  }

  & p.form-wrapper-inline {
    display: flex;
    flex-direction: row;
    justify-content: center;
    input[type="checkbox"] {
      margin-top: 5px;
      appearance: none;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      outline: none;

      &:checked {
        background-color: black;
      }
    }
    label {
      display: inline-block;
      margin-left: 10px;
    }
  }
`;
