import React from 'react'

const InputField = ({inputNum}) => {
  return (
    <>
      <input name="calInput"  type="text" readOnly  className="w-[17.5rem] rounded-md h-[6rem] p-2 font-thin text-right outline-none ring-2 border-none bg-black text-white ring-orange-500 text-5xl" value={inputNum}  />
    </>
  )
}

export default InputField
