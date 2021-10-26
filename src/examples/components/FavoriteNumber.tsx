import React, { useState } from 'react'

interface Props {
  min?: number;
  max?: number;
}

export const FavoriteNumber = ({min = 1, max = 9}: Props) => {
  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setNumber(Number(e.currentTarget.value))
    setNumberEntered(true)
  }

  const isValid = !numberEntered || (number >= min && number <= max)

  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  )
}
