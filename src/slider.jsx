import styled from 'styled-components'



export const ColorSlider = styled.input`
    margin:1em 0;
    -webkit-appearance: none; 
    appearance: none;
    width:100%;
    height:10px;
    border-radius:5px;
    background-color:#09090D;
    cursor: pointer;

    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    background: #E3E2E9;
    border-radius: 100%;
    margin-top:-8px;
    }

    &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    width:100%;
    margin:0 auto;
    outline: none;
    height: 5px;
    border-radius: 10px;
    background-image: transparent;
    }


  &::-ms-track{
    background: #E3E2E9;

}
   
`
