import React from 'react'
import { ClimbingBoxLoader} from 'react-spinners'
import {Box} from "gestalt"


const Loader =({show}) => {
  return (
   show && (<Box
    position="fixed"
    dangerouslySetInlineStyle={{
      __style: {
        bottom: 300,
        left: "50%",
        transform: "translateX(-50%)"
      }
    }}
    >
        <ClimbingBoxLoader  color="#66440E" size={50} margin={10}/>
   </Box>   )
  )
}

export default  Loader