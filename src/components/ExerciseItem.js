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

const ExerciseItem = ({ exercise }) => {
  return (
    <ExerciseContainer>
      <h3>{exercise.name}</h3>
      <img src="https://via.placeholder.com/300x200" alt="new" />
      <h4>{exercise.category}</h4>
      <h4>{exercise.target_muscle}</h4>
      <p>{exercise.instructions}</p>
    </ExerciseContainer>
  )
}

export default ExerciseItem
