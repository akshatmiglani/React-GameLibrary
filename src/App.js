import React, { useEffect, useState } from 'react';
import './App.css';
import GameCard from './GameCard';
import SearchIcon from './search-icon.svg';
const KEY=process.env.REACT_APP_KEY;
const API_URL=`https://api.rawg.io/api/games?key=${KEY}`;

const App = () => {
    const [Games, setGames] = useState([]);
    
    const SearchGames = async (title) => {
        const response = await fetch(`${API_URL}&search=${title}`);
        const data = await response.json();
        
        setGames(data.results); 
    };

    useEffect(() => {
        SearchGames();
    }, []);

    const handleSearchInputChange = (event) => {
        const title = event.target.value;
        SearchGames(title);
    };

    return (
        <>
            <div className='app'>
                <h1>Game Library</h1>
            </div>
            <div className="search">
                <input
                    placeholder='Search for games'
                    onChange={handleSearchInputChange}
                />
                <img src={SearchIcon} alt="Search" onClick={handleSearchInputChange} />
            </div>
            {
                Games?.length > 0
                ? (
                    <div className="container">
                        {Games.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No games found</h2>
                    </div>
                )
            }
        </>
    );
};

export default App;
