import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

const SignInPageWrapper = styled.div`
  background: linear-gradient(
    to bottom right,
    #e5f8ff 40%,
    #74b0c9 70%,
    #346076 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;

  .container {
    width: 80%;
    height: 85vh;
    background: linear-gradient(to top right, #fff 30%, #bee5fb 100%);
    border-radius: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    align-items: center;

    .left-side {
      flex: 0 1 50%;
      padding: 2rem 5rem;

      h2 {
        color: ${color.PRIMARY_COLOR_DARK};
        font-size: 3.5rem;
        margin: 2rem 0;
      }

      form {
        margin: 4rem 0;
      }
    }

    .right-side {
      flex: 0 0 50%;

      img {
        width: 80%;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;

    margin: 5rem 0;
  }
`;

export default SignInPageWrapper;
