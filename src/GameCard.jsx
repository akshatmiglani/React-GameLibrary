import React from 'react';

const GameCard=({ game })=>{
    return (
        <>
            <div className='movie'>
                <div>
                    <p>{game.released}</p>
                </div>
                <div>
                    <img src={game.background_image} alt="Poster"/>

                </div>
                <div>
                    <h3>{game.name}</h3>
                </div>
            </div>
        </>
    )
}
export default GameCard;