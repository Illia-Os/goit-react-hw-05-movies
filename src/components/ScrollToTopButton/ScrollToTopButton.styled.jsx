import styled from '@emotion/styled';

export const BtnToTop = styled.button`
  position: fixed;
  right: 20px;
  bottom: 25px;
  width: 45px;
  height: 45px;
  background: linear-gradient(#8745f7, #5f30b0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  border: none;
  transition-duration: 0.3s;
   &.visible {
    opacity: 1;
  }
   &:hover {
    .text {
      opacity: 1;
      transition-duration: 0.7s;
    }
   
`;

export const Text = styled.p`
  font-size: 0.7em;
  width: 100px;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: -25px;
  opacity: 0;
  transition-duration: 0.7s;
`;
