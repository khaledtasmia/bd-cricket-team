import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalPlayers = props.totalPlayers && props.totalPlayers;
    console.log(totalPlayers);
    let totalBudget = totalPlayers.reduce((sum, player) => sum+player?.salary, 0);
    console.log(totalBudget);
    return (
        <div>
            <h3 style={{ marginLeft: '90px', marginTop: '10px' }}>Selected Players</h3>
            <div className="cart-container">
                <h5>Total Players: {totalPlayers.length}</h5>
                <h5>Names and Salary:</h5>
                <ol>
                    {
                        totalPlayers.map(player => <li key={player.id}>{player.name} ({player.salary})</li>)
                    }
                </ol>
                <h4 style={{color:"maroon"}}>Total Budget: {totalBudget}</h4>
            </div>
        </div>
    );
};

export default Cart;