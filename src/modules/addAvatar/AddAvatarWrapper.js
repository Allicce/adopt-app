import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

const AddAvatarWrapper = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    width: 60%;
    height: 80vh;
    z-index: 20;
    background-color: ${color.WHITE};
    overflow: scroll;
  }

  h3 {
    padding: 3rem 1.5rem;
    font-size: 2.4rem;
  }

  .avatars-container {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    .avatar {
      margin: 0 auto;
      position: relative;
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      .avatar-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 18;
        font-size: 1.4rem;
        text-align: center;
        color: ${color.WHITE};
        visibility: hidden;
      }

      .avatar-background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 16;
        width: 1px;
        height: 1px;
        border-radius: 50%;
        background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
        transition: all 0.2s ease-out;
      }

      &:hover {
        transform: scale(1.1);

        .avatar-text {
          //background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
          visibility: visible;
        }

        .avatar-background {
          width: 100%;
          height: 100%;
        }
      }

      &.current-avatar {
        transform: scale(0.8);
        opacity: 0.7;

        &::after {
          content: "";
          width: 100%;
          height: 4px;
          background-color: ${color.PRIMARY_COLOR_LIGHT};
          position: absolute;
          bottom: -10px;
          left: 0;
          z-index: 17;
        }

        &:hover {
          transform: scale(0.8);
          opacity: 0.7;

          .avatar-background {
            background: transparent;
            visibility: hidden;
          }

          .avatar-text {
            visibility: hidden;
          }
        }
      }
    }
  }

  .close-button {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 30;
    padding: 1rem 1.3rem;
    background-color: ${color.GREY_4};
    border-radius: 50%;
  }
`;

export default AddAvatarWrapper;
