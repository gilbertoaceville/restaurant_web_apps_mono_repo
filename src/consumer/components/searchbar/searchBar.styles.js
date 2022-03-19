import styled from "styled-components"
 
export const SearchBarContainer = styled.div`
width:${(props)=>props.width ? props.width : "670px"};
background-color: transparent;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: flex-end;
height:${(props)=>props.height ? props.height : "51px"};
box-shadow:${({shadow}) => shadow || "0px 8px 8px -4px #aaa"} ;
border: ${({border})=> border || "none"};
overflow: hidden;
margin: 10px 0;

@media screen and (max-width: 1024px) {
    width: 50%;
}

@media screen and (max-width: 992px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
}

@media screen and (max-width: 768px) {
    width: 100%;
    height: 40px;
}

@media screen and (max-width: 750px) {
    width: 85%;
    height: 35px;
}

`

export const Input  = styled.input`
height: 100%;
width:85%;
border:none;
outline: none;
padding: 0 15px;

&:hover{
    border:none;
}

@media screen and (max-width: 750px) {
    padding: 0 8px;
}
`

export const IconContainer = styled.div`
height:${(props)=>props.height ? props.height : "100%"};

width:${(props)=>props.width ? props.width : "15%"};
/* padding:10px; */
border-radius:10px;
align-items:center;
display: flex;

justify-content: center;
background-color: ${({iconBgColor})=> iconBgColor || "#F38B1C"};
color: ${({iconColor})=> iconColor || "#ffffff"};

@media screen and (max-width: 750px) {
    width: 20%;
}
`