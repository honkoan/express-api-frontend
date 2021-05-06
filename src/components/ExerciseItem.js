/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const ExerciseContainer = styled.div`
  width: 300px;
  text-align: justify;
  margin: 20px auto;
  border: 2px solid pink;
  padding: 5px 20px;
`

const ExerciseItem = ({ name, category, targetMuscle, instructions }) => {
  return (
    <ExerciseContainer>
      <h3>{name}</h3>
      <img src="https://via.placeholder.com/300x200" alt="new" />
      <h4>{category}</h4>
      <h4>{targetMuscle}</h4>
      <p>{instructions}</p>
    </ExerciseContainer>
  )
}

export default ExerciseItem
