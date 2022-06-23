import React from 'react'
import './tictactoebox.css'


export function TicTacToeBox({boxState, clicked, rowNum, colNum}){
    return(
        <div onClick={()=>clicked(rowNum, colNum)} className='box'>
            {boxState}
        </div>
    )
}