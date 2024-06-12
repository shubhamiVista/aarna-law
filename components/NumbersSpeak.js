import { numbers } from '@utils/data'
import React from 'react'
import NumbersSpeakItem from './NumbersSpeakItem'

const NumbersSpeak = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-14">
      <h1 className="text-custom-red text-2xl font-semibold">
        Our Track Record by Numbers
      </h1>
      <ul className="flex justify-center gap-6">
        {numbers.map((item) => (
          <NumbersSpeakItem key={item.id} numberDetails={item} />
        ))}
      </ul>
    </div>
  )
}

export default NumbersSpeak
