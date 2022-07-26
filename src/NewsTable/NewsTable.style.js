import { Container } from "reactstrap";
import styled from "styled-components";

export const TableContainer = styled(Container)`
.header-row{
    background-color:orange;
    font-size: 16px;
    font-weight: bold;
    color: white;
    display:flex;
}
.news-column{
    flex:9;
    padding: 5px;
}
normal-col{
    flex:1.5;
    padding: 5px;
    margin-right: 50px;
}
`