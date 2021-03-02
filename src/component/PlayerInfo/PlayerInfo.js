import React from 'react';
import './PlayerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const PlayerInfo = (props) => {
    // console.log(props.pn);
    // const {image, name, salary} = props.pn;

    return (
        <div className="playerInfo">
            <img src={props.pn?.image}></img>
            <h5>{props.pn?.name}</h5>
            <h6>Salary Per Match:</h6>
            <p>{props.pn?.salary} Tk</p>
            <button onClick={() => props.handleAddPlayer(props.pn)}><FontAwesomeIcon icon={faUser} /> Add Player</button>
        </div>
    );
};

export default PlayerInfo;