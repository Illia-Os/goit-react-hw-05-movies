import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid gray;
  border-radius: 0;
  width: 200px;
  color: white;
  font-size: 18px;
  &::placeholder {
    color: grey;
    transition: color 250ms ease;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  background-color: #8745f7;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
