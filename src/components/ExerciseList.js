/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'

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
        <h3>{exercise.name}</h3>
      ))}
    </div>
  )
}

export default ExerciseList
