
import styled from "styled-components"


export const Container = styled.div`
width:95%;
align-items: flex-end;
display: flex;
margin-top:10px;
justify-content: flex-end;
float:left;

.react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 43px;
    height: 23px;
    background: #15D527;
    border-radius: 100px;
    position: relative;
    transition: background-color .3s;
  }
  
  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 17px;
    height: 17px;
    margin-bottom:-1px;
    border-radius: 45px;
    transition: 0.2s;
    background: grey;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(90% - 2px);
    background-color: #fff;
    transform: translateX(-80%);
  }
  
  .react-switch-label:active .react-switch-button {
    width: 40px;
  }
  `