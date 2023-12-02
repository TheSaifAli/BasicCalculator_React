import React from 'react'
import { Button } from "@mui/material";

const NumberButtons = ({numberText,onclickHandler}) => {
  return (
    <>
      <Button 
                className=" w-16 h-16 bg-gray-500 rounded-full text-2xl font-semibold shadow-md cursor-pointer outline-none text-zinc-300 active:rounded-xl transition-transform duration-400 ease-in-out"
                value={numberText}
                onClick={onclickHandler}
                variant="outlined"
                color='warning'
                size='large'
              >
                {numberText}
              </Button>
    </>
  )
}

export default NumberButtons
