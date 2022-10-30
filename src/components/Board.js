import Box from './Box';
import './Board.css'
function Board({board, onClick}){
    return(
        <div className='board'>
            {
                board.map((value,index) => {
                    return(
                        <Box key={index} value={value} onClick={() => value === null && onClick(index)}/>
                    )
                })
            }
        </div>
    )
}

export default Board;