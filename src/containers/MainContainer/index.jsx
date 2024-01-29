import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  CustomLabel,
  CustomText,
  FlexContainer,
  SideContainer,
  SubtitleLabel,
} from "..";
import { 
  aboutMe, 
  colors, 
  education, 
  experience 
} from "../../library";

export const MainContainer = () => {
  const fillDetails = ({ ...data }) => {
    return (
      <FlexContainer key={data.key} align>
        <SubtitleLabel>{data.role}</SubtitleLabel>
        <SubtitleLabel color={colors.gray}>
          {data.place + " | " + data.time}
        </SubtitleLabel>
        <CustomText textAlign>{data.details}</CustomText>
      </FlexContainer>
    );
  };

  const educationDetails = education.map((data) => {
    return fillDetails(data);
  });

  const experienceDetails = experience.map((text) => {
    return fillDetails(text);
  });

  return (
    <SideContainer w="77%" bg={colors.white}>
      <FlexContainer minHeight="90vh">
        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color={colors.delftBlue}>
            <FontAwesomeIcon icon={faUser} /> Acerca de mi
          </CustomLabel>
          <CustomText>{aboutMe.about}</CustomText>
        </FlexContainer>

        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color={colors.delftBlue}>
            <FontAwesomeIcon icon={faGraduationCap} /> Educación
          </CustomLabel>
          {educationDetails}
        </FlexContainer>

        <FlexContainer h="20%" w="90%" align>
          <CustomLabel color={colors.delftBlue}>
            <FontAwesomeIcon icon={faBriefcase} /> Experiencia
          </CustomLabel>
          {experienceDetails}
        </FlexContainer>
      </FlexContainer>
    </SideContainer>
  );
};
