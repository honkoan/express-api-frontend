/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import styled from 'styled-components'

const ExerciseContainer = styled.div`
  width: 300px;
  text-align: justify;
  margin: 20px auto;
  border: 2px solid pink;
  padding: 5px 20px;
`

const ExerciseItem = ({ name, category, muscle_group, target_muscle, instructions }) => {
  const [isActive, setActive] = useState(true)

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <ExerciseContainer>
      <img src="https://via.placeholder.com/300x200" alt="new" />
      <h3>{name}</h3>
      <button type="button" onClick={handleToggle}>
        Show more information
      </button>
      <div className={isActive ? 'hidden' : 'display'}>
        <h4>{category}</h4>
        <h4>{muscle_group}</h4>
        <h4>{target_muscle}</h4>
        <p>{instructions}</p>
      </div>
    </ExerciseContainer>
  )
}

export default ExerciseItem
