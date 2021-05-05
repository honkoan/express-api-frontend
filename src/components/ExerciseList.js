/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'

import ExerciseItem from './ExerciseItem'

const ExerciseList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch('https://honkoan-express.herokuapp.com/exercises')
      .then((res) => res.json())
      .then((exercise) => setExercises(exercise))
  }, [])
  return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseItem key={exercise.exerciseID} exercise={exercise} />
      ))}
    </div>
  )
}

export default ExerciseList
