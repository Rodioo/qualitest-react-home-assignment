import styled from "styled-components";

export const StyledLoading = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  margin: auto;
    
  p {
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
  }
`;