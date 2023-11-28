import styled from "styled-components";

export const StyledError = styled.div`
  position: fixed;
  right: 8px;
  bottom: 0;
  max-width: 256px;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 0 8px 0;
  color: ${({theme }) => theme.colors.white};
  background-color: ${({theme }) => theme.colors.accent};
  display: flex;
  flex-direction: column;
  text-align: center;

  p.text {
    font-size: ${({theme }) => theme.typography.small};
  }
`;
