import styled from "styled-components";

export const RedButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  background-color:rgb(149, 35, 73);
  color:white;
  padding:10px;
  text-align: center;
  font-size:20px;
  border:none;
   margin-top:20px;
`;

export const BlackButton = styled(RedButton)`
background-color:black;
color:white;
width:200px;
heigth:150px
`;

export const FormButton = styled(RedButton)`
background-color:black;
color:white;

border-radius:5px;
`;




