import styled, { css } from "styled-components";

export const StyledForm = styled.form`
   margin: 0 auto;
   max-width: 700px;
   border-radius: 15px;
   background-color: rgba(255, 255, 255, 0.83);
   font-family: "Lato", sans-serif;
   text-align: center; 
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Legend = styled.legend`
   text-align: left;
   font-weight: bold;
   font-size: large; 
`;

export const Label = styled.label`
    margin: 5px;

    ${({ bold }) => bold && css`
        font-weight: bold;
    `}
`;

export const Select = styled.select`
    margin-left: 5px;
`;

export const Button = styled.button`
   margin: 10px auto;
   padding: 10px 20px;
   border-radius: 10px;
   background-color: rgba(255, 255, 255, 1);
   box-shadow: 0 0 10px rgb(218, 165, 32);
   cursor: pointer; 
   transition: transform .3s;
   
   &:hover {
    transform: scale(1.1);
   }
`;
