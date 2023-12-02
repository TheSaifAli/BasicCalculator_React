import React from 'react'
import { Button } from "@mui/material";

const SpecialButtons = ({btnText,onclickHandler}) => {
  return (
    <>
      <Button className=" w-16 h-16 bg-zinc-300  text-2xl active:rounded-lg font-medium shadow-md cursor-pointer transition-all duration-200 ease-linear"
              value={btnText} onClick={onclickHandler}variant="contained" color='warning' size="large">{btnText}</Button>
    </>
  )
}

export default SpecialButtons
