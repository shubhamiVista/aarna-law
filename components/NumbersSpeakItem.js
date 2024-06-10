import React from 'react'

const NumbersSpeakItem = ({ numberDetails }) => {
  const { rupees, title } = numberDetails
  return (
    <li className="w-11/12">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-custom-blue font-semibold">{rupees}</h1>
        <span className="text-custom-red font-semibold">
          - - - - - - - - - - - - - - -
        </span>
        <p className="text-custom-gray text-xl text-center">{title}</p>
      </div>
    </li>
  )
}

export default NumbersSpeakItem
