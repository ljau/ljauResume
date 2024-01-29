import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  SideContainer,
  CustomLabel,
  FlexContainer,
  SubtitleLabel,
  CustomImage,
} from "..";
import myPicture, {
  colors,
  contact,
  skills,
  myName,
  skillsSectionsList,
  softSkills,
} from "../../library";
import { SkillsContainer } from "./styled";


export const SideBar = () => {
  const getData = (text, title) => {
    return (
      <SubtitleLabel key={text.description} fontS="95%" color={colors.white}>
        {title === "Contact" ? <FontAwesomeIcon icon={text.icon} /> : undefined}{" "}
        {text.description}
      </SubtitleLabel>
    );
  };

  const getDetails = (section) => {
    switch (section) {
      case "Aptitudes":
        return skills.map((data) => {
          return getData(data);
        });
      case "Contacto":
        return contact.map((data) => {
          return getData(data, "Contact");
        });
      case "Soft-Skills":
        return softSkills.map((data) => {
          return getData(data);
        });
      default:
        break;
    }
  };

  const showContainers = skillsSectionsList.map((data) => {
    return (
      <SkillsContainer key={data.title}>
        <CustomLabel color={colors.mintGreen}>
          <FontAwesomeIcon icon={data.icon} /> {data.title}
        </CustomLabel>
        {getDetails(data.title)}
      </SkillsContainer>
    );
  });

  return (
    <SideContainer w="23%">
      <FlexContainer h="30%" minHeight="30vh" bg={colors.raisinBlack} >
        <CustomLabel padding="5%" color={colors.white}>
          {myName.name}
        </CustomLabel>
        {/*<CustomImage src={myPicture} />*/}
      </FlexContainer>

      <FlexContainer h="70%" w="85%" minHeight="60vh">
        {showContainers}
      </FlexContainer>
    </SideContainer>
  );
};
