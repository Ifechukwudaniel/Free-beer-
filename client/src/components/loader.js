import React from 'react'
import { HashLoader} from 'react-spinners'
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
        <HashLoader color="#9DC2EE" size={150} margin={10}/>
   </Box>   )
  )
}

export default  Loader