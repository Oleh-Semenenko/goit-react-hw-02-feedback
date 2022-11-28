import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const FeddbackBtn = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 16px;
  text-transform: capitalize;

  :hover {
    background-color: #3881f5;
    color: #fff;
  }
`;
