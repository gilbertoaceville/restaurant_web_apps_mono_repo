/*
 * component: FormStylesWrapper
 * author:
 */

import styled from "styled-components";

export const TextareaWrapper = styled('div')`
margin-bottom: 2rem;
height: 100%;

  .input-container{
    width: 100%;  

  }

  label{
    font-weight: lighter;
    color: #000;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;


  }

  .field{
    width: 100%;  
    border: none;
    height: 100%;
    position: relative;
    background-color: none;

  }

  textarea{
    width: 1000px;
    height: 100px;
    border: 1px solid #7F7F7F59;
    border-radius: 5px;
    outline: none;
    resize: none;
    text-indent:8px;
    padding: 5px;

    &::placeholder{
      color: #7F7F7F80;
      font-size: 13px;

}
  }

`

