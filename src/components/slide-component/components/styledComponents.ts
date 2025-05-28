import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  height: 90vh;
  background-color: #695acd89;
  width: 90%;
  margin: 2rem 0;
  justify-content: center;
`;

export const SlideContainerRight = styled(SlideContainer)`
  align-self: flex-start;
  border-radius: 0 2rem 2rem 0;

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
  border-radius: 2rem 0 0 2rem;

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

export const SlideHeader = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
  z-index: 2;
  width: 100%;
  padding: 0 1rem;
  border-radius: 0.5rem;
  align-self: center;
`;
