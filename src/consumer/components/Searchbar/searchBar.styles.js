import styled from "styled-components"
 
export const SearchBarContainer = styled.div`
width:${(props)=>props.width ? props.width : "100%"};
background-color: white;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: flex-end;
height:${(props)=>props.height ? props.height : "30px"};
box-shadow:0px 1px 1px 1px white;
overflow: hidden;
@media screen and (max-width: 992px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
  
}

`

export const Input  = styled.input`
height: 100%;
width:85%;
border:none;

border-color:red;
&hover{
    border:none;
    border-color:red

}
`

export const IconContainer = styled.div`
height:${(props)=>props.height ? props.height : "30px"};
width:${(props)=>props.iconwidth ? props.iconwidth : "40px"};
border-radius:10px;
align-items:center;
display: flex;
justify-content: center;
background-color:${(props)=> props.background ? props.background : "#FAD1A4"};

`