import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

const SignInSignUpPageWrapper = styled.div`
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
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr 3fr;
    justify-content: space-between;
    gap: 1rem;

    margin: 5rem 0;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .redirect {
    color: ${color.PRIMARY_COLOR_DARK};
    cursor: pointer;
  }

  .avatar {
    width: 80%;
    position: relative;

    img {
      width: 100%;
    }

    .edit-avatar {
      position: absolute;
      bottom: 2rem;
      right: -1rem;
      width: 40%;
      padding: 0.2rem 0.4rem;
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      border: 1px solid ${color.GREY_6};
      border-radius: 5px;
      background-color: ${color.WHITE};
      img {
        width: 25%;
        margin-right: 0.7rem;
      }
    }
  }

  //.row-right-side {
  //  padding-top: 6rem;
  //}
`;

export default SignInSignUpPageWrapper;
