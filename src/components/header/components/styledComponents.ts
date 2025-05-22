import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 2rem 0rem;
  display: flex;
  height: 70vh;
  background-color: dimgray;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const VideoContainer = styled.video`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  position: absolute;
  right: 0;
`;

export const LogoImg = styled.img`
  width: 44.45px;
  height: 35px;
`;

export const LogoFont = styled.h1`
  font-size: 1.6rem;
  color: white;
  margin: 2px 0px 0px 0px;
  color: rgba(128, 209, 95, 1);
`;

export const LogoContainer = styled.div`
  font-family: "Roboto Flex", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin: 1rem;
  z-index: 2;
  background-color: #695acd89;
  padding: 5px 7px;
  border-radius: 5px;
`;
