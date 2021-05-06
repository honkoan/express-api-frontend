/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'

import ExerciseItem from './ExerciseItem'

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch('https://honkoan-express.herokuapp.com/exercises')
      .then((res) => res.json())
      .then((json) => setExercises(json.data))
  }, [])
  return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseItem {...exercise} key={exercise.exerciseID} />
      ))}
    </div>
  )
}

export default ExerciseList