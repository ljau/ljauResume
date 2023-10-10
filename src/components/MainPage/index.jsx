import React from "react";
import { Layout, SideBar } from "../../containers";
import { MainContainer } from "../../containers";
import { colors } from "../../library";
import { TableContainer } from "./styled";

export const MainPage = () => {
  return (
    <Layout>
      <TableContainer
        align
        w="60%"
        marginTop="5vh"
        marginBot="5vh"
        bg={colors.uclaBlue}
        minWidth="720px"        
      >
        <SideBar />
        <MainContainer />
      </TableContainer>
    </Layout>
  );
};
