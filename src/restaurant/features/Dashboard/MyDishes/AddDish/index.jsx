import React, { useState } from 'react';
import {
    AddDishWrapper,
    InputContainer,
    Form,
    FormContainer,
    TextContainer,
    ImageUploadContainer,
} from './AddDish.styles'
import MiniHeaderOutLine from '../../../../component/MiniHeader/MiniHeaderOutline'
import Input from '../../../../component/Inputs'
import TextArea from '../../../../component/Inputs/Textarea'
import {MdPersonOutline} from "react-icons/md";
import { IoMdImages } from 'react-icons/io';


const Index = ({ onClick, arrowTitle }) => {
    const [dishImage, setDishImage] = useState(null)

    const handleUploadImage = ({target:{files}}) => {
        if (files && files[0]) {
          let img = files[0];
          setDishImage(URL.createObjectURL(img)
          );
        }
      }

    const formData = [
        [{
            label: 'Dish Name',
            placeholder: 'Enter Dish Name',
        },
        {
            label: 'Cost Price',
            placeholder: 'Enter Dish Name',
        },
        {
            label: 'Delivery Fee',
            placeholder: 'Enter Dish Name',
        },
        ],
        [
            {
                label: 'Category',
                placeholder: 'Enter Dish Name',
            },
            {
                label: 'Sub Category',
                placeholder: 'Enter Dish Name',
            },
            {
                label: 'Estimated Delivery Time',
                placeholder: 'Enter Dish Name',
            },
        ]
    ]
    return (
        <AddDishWrapper  >
            
            <MiniHeaderOutLine
                onClick={onClick}
                navigation
                title={arrowTitle !== ''? arrowTitle : 'Back'}
            />

            <FormContainer>
                <Form>
                    <InputContainer >
                        <div className="leftInput" >
                            {formData[0].map(({ placeholder, label }, idx) => (
                                <Input
                                    key={label + idx}
                                    placeholder={placeholder}
                                    label={label}
                                />
                            ))}
                        </div>

                        <div className='rightInput' >
                            {formData[1].map(({ placeholder, label }, idx) => (
                                <Input
                                    key={label + idx}
                                    placeholder={placeholder}
                                    label={label}
                                />
                            ))}
                        </div>
                    </InputContainer>
                    {/* {label === 'Dish Description'? */}

                    {/* } */}
                    <TextContainer>
                        <TextArea
                            label={'Dish Description'}
                            placeholder={'Tell us about the dish'}
                        />
                    </TextContainer>
                    <ImageUploadContainer>
{/* ==================================================================== */}
<div className='upload_image_section'>
            <div className='upload_image_section_random_style '>
              <div className='image_holder'>
                {dishImage === null ? <MdPersonOutline color='#f38b1c'/>
                  : <img src={dishImage} alt='profile-image'/>
                }
              </div>
            </div>
            <div className='upload_image_section_random_style  choose_file'>
              <label>
                <input
                  type="file"
                  onChange={handleUploadImage}
                />
                <IoMdImages/>
                Upload Dish Image
              </label>
            </div>
            <div
              className='upload_image_section_random_style remove'
              onClick={() => setDishImage(null)}
            >
              X
            </div>
          </div>

{/* ========================================================================== */}
                    </ImageUploadContainer>
                </Form>
            </FormContainer>
        </AddDishWrapper>
    );
};

export default Index;