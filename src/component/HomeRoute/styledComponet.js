import styled from 'styled-components'

export const HomeCard = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin-top: 10vh;
`

export const WidthCard = styled.div`
  width: 90%;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 23px;
  font-weight: 700;
`

export const CoursesList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const CourseItem = styled.li`
  width: 170px;
  margin: 0px 20px 40px 0px;
  @media screen and (min-width: 768px) {
    margin: 0px 20px 60px 0px;
  }
`

export const NavigationLink = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  margin-right: 15px;
  width: 45px;
`

export const CourseName = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-weight: 700;
`
