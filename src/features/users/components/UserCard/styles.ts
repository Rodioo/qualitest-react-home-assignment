import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
  margin-top: 96px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  opacity: 0.9;
  
  .index {
    color: ${({ theme }) => theme.colors.white};
  }
  
  img {
    border-radius: 50%;
  }
  
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    color: ${({ theme }) => theme.colors.white};
  }
`;
