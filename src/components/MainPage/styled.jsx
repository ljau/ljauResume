import styled from "styled-components";
import { FlexContainer } from "../../containers";

export const TableContainer = styled(FlexContainer)`

max-height: 100%;
flex-direction: row;
@media (max-width: 1080px){
    flex-direction: column;
    max-height: 100%;

}
`;



