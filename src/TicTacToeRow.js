import { TicTacToeBox } from "./TicTacToeBox"
import './tictactoerow.css'

export function TicTacToeRow({rowState, ... props}){
    return(
        <div className='row'>
            <TicTacToeBox colNum = {1} {... props} boxState={rowState[0]}></TicTacToeBox>
            <TicTacToeBox colNum = {2} {... props} boxState={rowState[1]}></TicTacToeBox>
            <TicTacToeBox colNum = {3} {... props} boxState={rowState[2]}></TicTacToeBox>
        </div>
    )
}