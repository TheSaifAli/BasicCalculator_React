import React from 'react'
import { Button } from "@mui/material";

const OperationalButtons = ({operationalBtn,onclickHandler}) => {
  return (
    <>
      <Button
              className=" w-16 h-16 bg-yellow-600 rounded-full text-2xl font-medium shadow-md cursor-pointer text-zinc-300"
              value={operationalBtn}
              onClick={onclickHandler}
              variant="contained" color='warning'
              size='large'
            >
              {operationalBtn}
            </Button>
    </>
  )
}

export default OperationalButtons
