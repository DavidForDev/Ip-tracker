import styled from "styled-components";

export const PrimaryInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 11px;
  background: white;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const PrimaryButton = styled.button`
  padding: 13px;
  background: black;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
  &:hover {
    background: #2b2b2b;
  }
`;
