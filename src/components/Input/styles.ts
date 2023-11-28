import styled from "styled-components";

export const StyledInput = styled.input<{$invalid: boolean}>`
  width: 50%;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme}) => theme.colors.primary};
  border-radius: 5px;
  outline: none;
  
  &:focus {
    border-color: ${({ theme , $invalid}) => $invalid ? theme.colors.accent : theme.colors.secondary};
  }

  // Remove default arrows for number input
  // Chrome, Safari, Edge, Opera
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox 
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

export const ErrorMessage = styled.span`
  margin-left: 8px;
  color: ${({theme}) => theme.colors.accent};
  font-size: ${({theme}) => theme.typography.fontSizes.medium};
`;
