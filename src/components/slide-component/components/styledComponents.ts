import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  height: 70vh;
  background-color: #695acd89;
  width: 90%;
  border-radius: 2rem;
  margin: 1rem 0;
`;

export const SlideContainerRight = styled(SlideContainer)`
  align-self: flex-start;

  animation-name: slide-in-left;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;

  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const SlideContainerLeft = styled(SlideContainer)`
  align-self: flex-end;

  animation-name: slide-in-right;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;

  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
