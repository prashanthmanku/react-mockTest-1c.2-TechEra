import styled from 'styled-components'

export const FailureCard = styled.div`
  width: 90%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 70%;
  max-width: 400px;
`

export const Heading = styled.h1`
  color: #475569;
  font-size: 25px;
  margin-top: 30px;
  font-weight: 700;
`

export const Description = styled.p`
  color: #64748b;
  margin-top: 0px;
  font-size: 15px;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4656a1;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
