import styled from "styled-components";
import { colors } from "../library";

export const Layout = styled.div`
  background-color: ${colors.powderBlue};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    max-height: 100%;
  }
`;

export const SideContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: 100%;
  width: ${({ w }) => w ?? "100%"};
  min-height: 90vh;
  display: flex;
  justify-content: ${({ jc }) => jc ?? "center"};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  flex-direction: ${({ dir }) => dir ?? "column"};

  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
    min-height: 100%;
  }
`;

export const FlexContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: ${({ h }) => h ?? "100%"};
  width: ${({ w }) => w ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  flex-direction: ${({ dir }) => dir ?? "column"};
  min-height: ${({ minHeight }) => minHeight ?? "undefined"};
  min-width: ${({ minWidth }) => minWidth ?? "undefined"};
  margin-top: ${({ marginTop }) => marginTop ?? "undefined"};
  margin-bottom: ${({ marginBot }) => marginBot ?? "undefined"};
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media (max-width: 1080px) {
    min-height: 0px;
  }
`;

export const CustomLabel = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ color }) => color ?? colors.black};
  padding: ${({ padding }) => padding ?? "0px"};
  @media (max-width: 1080px) {
    font-size: 200%;
  }
`;

export const SubtitleLabel = styled.h1`
  font-size: ${({ fontS }) => fontS ?? "18px"};
  font-weight: bold;
  color: ${({ color }) => color ?? colors.uclaBlue};
  margin: 1px;
  padding: 2px;
  word-wrap: break-word;
  word-break: break-word;
  @media (max-width: 1080px) {
    font-size: 150%;
  }
`;

export const CustomText = styled.p`
  font-size: 16px;
  color: ${({ color }) => color ?? colors.black};
  text-align: ${({ textAlign }) => textAlign ?? "justify"};
  text-justify: inter-word;
  padding: 5px;
  white-space: pre-wrap;
  @media (max-width: 1080px) {
    font-size: 150%;
  }
`;

export const CustomImage = styled.img`
  width: 60%;
  height: 60%;
  margin: 5%;
  border-radius: 100%;
  @media (max-width: 1080px) {
    width: 30%;
    height: 30%;
    border-radius: 40%;
    margin-top: -3%;
}
`;
