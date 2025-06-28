import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  height: 90vh;
  /* background-color: #0b0c10; */
  background: #000000;
  /* background: linear-gradient(127deg,rgba(0, 0, 0, 1) 28%, rgba(194, 103, 33, 0.9) 77%, rgba(255, 30, 0, 0.89) 97%); */
  /* background-image: radial-gradient( circle farthest-corner at 50.2% 50.7%,  rgb(156, 0, 0) 0%, rgb(0, 0, 0) 50% ); */
  color: rgb(var(--gray-600));
  width: 90%;
  margin: 2rem 0;
  justify-content: center;
  flex-direction: column;
`;

export const SlideContainerLeft = styled(SlideContainer)<{
  $visible?: boolean;
}>`
  align-self: flex-end;
  border-radius: 2rem 0 0 2rem;
  /* background-image: linear-gradient(
    85.2deg,
    rgba(33, 3, 40, 1) 7.5%,
    rgba(65, 5, 72, 1) 88.7%
  ); */
  background: radial-gradient(
    circle,
    rgba(219, 33, 33, 1) 3%,
    rgba(136, 39, 39, 1) 24%,
    rgba(47, 46, 46, 1) 80%
  );

  opacity: 0;
  transform: translateX(1000px);
  transition: all 1s ease;

  ${({ $visible }) =>
    $visible &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
`;

export const SlideContainerRight = styled(SlideContainer)<{
  $visible?: boolean;
}>`
  align-self: flex-start;
  border-radius: 0 2rem 2rem 0;
  /* background-image: linear-gradient(
    290deg,
    rgba(8, 7, 7, 1) 2.6%,
    rgba(110, 43, 98, 1) 103.4%
  ); */
  background: radial-gradient(
    circle,
    rgba(219, 33, 33, 1) 3%,
    rgba(136, 39, 39, 1) 24%,
    rgba(47, 46, 46, 1) 80%
  );

  opacity: 0;
  transform: translateX(-1000px);
  transition: all 1s ease;

  ${({ $visible }) =>
    $visible &&
    `
    opacity: 1;
    transform: translateX(0);
  `}
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

export const Img = styled.img<{ imgHeight?: string }>`
  width: 30%;
  height: ${({ imgHeight }) => imgHeight ?? "300px"};
  margin-top: 5rem;
`;

export const Description = styled.p`
  font-size: 2rem;
  width: 55%;
  text-align: center;
  align-self: center;
`;

export const ImageAndDescriptionHolder = styled.div<{
  direction: "left" | "right";
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ direction }) =>
    direction === "left" ? "flex-end" : "flex-start"};
  gap: 50px;
  margin: ${({ direction }) =>
    direction === "left" ? "0 3rem 0 0" : "0 0 0 3rem"};
`;
