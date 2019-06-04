import React, { Component } from 'react'
import {Toast,Box} from 'gestalt'

const ToastMessage = ({ toast, massage })=> (
        <Box
        position="fixed"
        direction="column"
        display="flex"
         alignSelf="center"
        dangerouslySetInlineStyle= {{
            __style: {
              bottom: 250,
              left: "50%",
              transform: "translateX(-50%)"
            }
        }}>
         { toast && ( <Toast color="orange" text={massage}/>)}
        </Box>
)

export default ToastMessage
