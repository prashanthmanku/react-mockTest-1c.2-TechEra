import styled from 'styled-components'

export const BgCard = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin-top: 10vh;
`

export const WidthCard = styled.div`
  width: 90%;
`

export const CourseCard = styled.div`
  box-shadow: 0px 4px 16px 0px #e8e8e8;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 20px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0px;
  }
`

export const Img = styled.img`
  width: 90%;
  max-width: 200px;
  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`

export const ContentCard = styled.div`
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const Name = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-weight: bold;
`

export const Description = styled.p`
  color: #64748b;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 27px;
  }
`
