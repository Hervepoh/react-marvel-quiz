import React from 'react'
import img from '../../images/batman.png'
import styled from 'styled-components';

const ErrorPage = () => {
  
  return (
    <div className="quiz-bg">
      <div className="container"> 
        <ErrorHeader>Oops, cette page n'existe pas</ErrorHeader>
        <ErrorImg src={ img } alt="404 ERROR" />
        <ErrorTag>Erreur 404</ErrorTag>
      </div> 
    </div>
  )
}

const ErrorTag= styled.p`
  text-align : center;
  font-size: 2rem
`
const ErrorHeader = styled.h2`
  text-align : center;
`
const ErrorImg = styled.img`
  display : block;
  margin: 40px auto;
`

export default ErrorPage