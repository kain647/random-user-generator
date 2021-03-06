import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import sprites from "../image/card_icons.png";

export const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #eee;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;
export const Global = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background: #2c2e31;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;
export const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-top: 50px;
  font-size: 48px;
  font-weight: 100;
  text-transform: uppercase;
  color: #fff;
`;
export const Subtitle = styled.p`
  display: flex;
  color: #fff;
  font-size: 18px;
  font-weight: 100;
  .colorText {
    color: #08a;
    padding: 0px 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    line-height: 1.5;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  top: -180px;
  width: 730px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 768px) {
    display: flex;
    height: 550px;
    width: 100%;
    top: 0;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const UserPhoto = styled.img.attrs(props => {
  const { src } = props;
  const imageSrc = src || `https://bit.ly/3lXo30s`;
  return {
    src: imageSrc
  };
})`
  display: block;
  box-sizing: border-box;
  background: #fff;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 1), 0 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
`;

export const UserLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const UserValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c2e31;
  font-size: 38px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const SpriteContainer = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const SpriteIcon = styled.div`
  display: block;
  width: 40px;
  height: 48px;
  cursor: pointer;
  background-size: 378px;
  background-position-x: ${({ index }) => `-${index * (27 + 40)}px`};
  background-position-y: ${({ active }) => (active ? 0 : "-48px")};
  background-image: ${() => `url(${sprites})`};
  transition: background-position 0.25s ease-in-out;
`;

export const Line = styled.div`
  position: absolute;
  background-color: #eee;
  height: 1px;
  width: 100%;
  z-index: 0;
`;
export const LoadingContainer = styled.div`
  display: flex;
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #eee;
  margin: 0;
  padding: 0;
`;
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  margin: -25px auto 0;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 50%
  );
  animation: loader 1.5s infinite linear;
  transform: translateZ(0);
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 0;
    background: #ffffff;
    border-radius: 100% 0 0 0;
  }
  &:after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #eee;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
