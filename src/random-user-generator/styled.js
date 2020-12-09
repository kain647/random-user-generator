import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import sprites from "../image/card_icons.png";

export const GlobalStyle = createGlobalStyle`
  body {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  top: -180px;
  background-color: #fff;
  width: 730px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  z-index: 1;
  @media screen and (max-width: 768px) {
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
  margin-bottom: 20px;
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
  height: 100vh;
  background-color: #eee;
  margin: 0;
  padding: 0;
`;
