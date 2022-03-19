import styled from 'styled-components'

export const BodyHead = styled.header`
height:70px ;
width: 100%;
padding: 5px 0px;
display: flex;
justify-content: flex-end;


.mainWrapper{
width: 50%;
height: 100%;
display: flex;
justify-content: flex-end;  
align-items: center;
padding: 0 5px;
}
`;

export const AddDishButton = styled.input`
color: #fff;
border: none;
outline: none;
cursor: pointer;
font-weight: 600;
padding: 10px 15px;
border-radius: 10px;
background: #f38b1c;
margin: 0px 5px;


`;

export const SearchBarDiv = styled.input`
border: 1px solid #FAD1A4;
outline: none;
width: 100%;
font-weight: 600;
text-indent: 15px;
border-radius: 10px;
background: transparent;
color: #878896;
padding:${({searchText}) =>searchText? '10px 15px': "10px 0px"};
font: normal normal normal 16px/22px Open Sans;

&::placeholder{
    color: #878896;
    font-size: 12xpx;
}
`;

export const SearchBarContainer = styled('div')`
flex-grow: 1;
position: relative;
width: ${({searchText}) =>searchText? '70%' : '50%'};


svg{
    position: absolute;
    right:${({searchText}) =>searchText? '15px' : '15px'};
    color: #f38b1c;
    top: ${({searchText}) =>searchText? '15px' : '15px'};
    top: 15px;
}

`;

export const MessageAll = styled('div')`
color: #f38b1c;
display: flex;
justify-content: flex-end;
align-items: center;
height: 100%;
width: 30%;
`;