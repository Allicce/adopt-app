import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

const UserAccountWrapper = styled.div`
  position: relative;

  .avatar-container {
    cursor: pointer;
  }

  .user-dropdown {
    position: absolute;
    bottom: -10rem;
    right: 0;
    width: 20rem;
    min-height: 10rem;
    background-color: ${color.PRIMARY_COLOR_DARK};
    text-align: center;
    color: ${color.WHITE};
    z-index: 10;
    display: none;
    visibility: hidden;
    transition: all 0.5s ease-in-out;

    &.open {
      visibility: visible;
      display: block;
    }

    ul {
      list-style-type: none;
      padding: 1rem 0;
      margin: 0;

      li {
        font-size: 1.5rem;
        cursor: pointer;
        padding: 1rem 0;

        &:not(:last-child) {
          border-bottom: 1px solid ${color.GREY_4};
        }

        &:hover {
          background-color: ${color.PRIMARY_COLOR_LIGHT};
          color: ${color.GREY_6};
        }
      }
    }
  }
`;

export default UserAccountWrapper;
