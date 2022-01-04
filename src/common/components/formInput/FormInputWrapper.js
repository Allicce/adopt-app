import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.GREY_6};

  label {
    font-size: 1.2rem;
    margin: 0.5rem 1rem;
  }

  input {
    border: 1px solid ${color.GREY_6};
    padding: 0.7rem 1rem;
    font-size: 1.7rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  input:focus {
    background-color: rgba(0, 113, 171, 0.05);
    border: 1px solid ${color.GREY_6};
    outline: none;
  }

  input::placeholder {
    color: ${color.GREY_3};
    font-size: 1.3rem;
  }
`;

export default FormInputWrapper;
