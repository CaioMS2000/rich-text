import styled from "styled-components";
import {TypeBold} from "@styled-icons/bootstrap/TypeBold"

export const Container = styled.div`
    top:5vh;
    border: 2px solid rgba(0, 0, 0, 0.658);
    width: 90vw;
    height: 90vh;
    margin: auto;
    position: relative;
    box-shadow: 0px 0px 4px black;
    overflow: hidden;
    border-radius: 5px;
    background-color: rgba(116, 60, 138, 0);
`

export const Top = styled.div`
    height: 20%;
    width: 100%;
    background-color: rgba(82, 143, 63, 0);
    font-size: 13pt;
    border-bottom: 1px solid rgb(100, 100, 100);
    padding: 2px 0;
`

export const IframeContainer = styled.div`
    height: 80%;
    width: 90vw;
    background-color: rgba(138, 60, 60, 0);
`

export const Iframe = styled.iframe`
    height: 100%;
    width: 100%;
    background-color: rgba(133, 138, 60, 0);
`

export const basicTypeBold = styled(TypeBold)`
    color: #000;
    font-size: 30pt;
`