import styled from 'styled-components'

export const AddDishWrapper = styled('div')`
height: 100%;
width: 100%;
`;

export const FormContainer = styled('form')`
height: 90%;
width: 100%;
`;

export const InputContainer = styled('div')`
height: 52%;
width: 100%;
display: flex;
margin-top: 4px;
justify-content: space-between;

.leftInput, .rightInput{
    width: 40%;
    padding-top: 10px;
    height: 100%;
    input{
        width:100%;
    }
}
`;

export const Form = styled('form')`
height: 100%;
`;

export const TextContainer = styled('div')`
height: 23%;
width: 100%;
`

export const ImageUploadContainer = styled('div')`
height: 23%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;


.upload_image_section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0 0 1rem;

      .upload_image_section_random_style {
        padding:0 .5rem ;
        margin: auto 2px;
        cursor: pointer;

        label{
          font-size: 10px;
        display:flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        padding: 2px 10px;
        border: 2px dashed #7F7F7F59;
        border-radius: 10px;
        cursor: pointer;
        position: relative;
        }
        input[type="file"] {
        display: none;
        
        }
      }
      .choose_file{
        background:#fff;
        color: #7F7F7F59;
        font-weight:500;
        opacity: none;
        height: 70px;
        transition: opacity 300ms ease-in-out;

        &:hover{opacity: .9}
      }
      .image_holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: contain;
        overflow: hidden;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .remove{
        border-radius: 50px;
        color: #f38b1c;
        border: 1px solid transparent;
        transition: color 300ms ease-in;

          &:hover{
            color: red;
            
          }
      }
    }

`