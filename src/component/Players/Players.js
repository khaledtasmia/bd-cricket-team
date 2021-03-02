import React, { useState, useEffect } from 'react';
import playerData from '../../fakeData/playerData.json';
import Cart from '../../component/Cart/Cart';
import PlayerInfo from '../../component/PlayerInfo/PlayerInfo';

import './Players.css';

const Players = () => {
    const [playerNames, setPlayerNames] = useState([]);
    // console.log(playerNames[0].name);
    const [playerCount, setPlayerCount] = useState([]);
    // console.log(playerCount);

    const handleAddPlayer = (selectedPlayer) => {
        const newPlayerCount = [...playerCount, selectedPlayer];
        setPlayerCount(newPlayerCount);
    }

    useEffect(() => {
        setPlayerNames(playerData);
    }, []);
    return (
        <div className="container player-container">
            <div className="playerInfo-container">
                {
                    playerNames.map(pn => <PlayerInfo handleAddPlayer={handleAddPlayer} pn={pn} key={pn.id}></PlayerInfo>)
                }
            </div>
            <div>
                <Cart totalPlayers={playerCount}></Cart>
            </div>
        </div>
    );
};

export default Players;