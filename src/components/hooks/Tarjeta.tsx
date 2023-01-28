import React from 'react'
import { ICharacter } from '../interfaces/IReqRestApiCharacters';

const Tarjeta = (character: ICharacter) => {

    console.log(character);

    return (
        <div className='card m-2' style={{ width: '19rem' }} >
            <img src={character.image} className='card-img-top' alt={character.name} />
                <div className='card-body'>
                    <p className='card-text'>
                        {character.name}
                    </p>
                </div>
        </div>
    );
}

export default Tarjeta