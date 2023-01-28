import Tarjeta from './Tarjeta';
import useCharacter from './useCharacter';
const Personajes = () => {
    const {characters, next, before } = useCharacter();
    console.log(characters);
    return (
        <>
        <div className='row bg-dark'>
            {
                characters.map(character => <div className='col-sm-4'>
                        <Tarjeta key={character.id} {...character} /> </div>
                    )
            }
        </div>
            <button className='btn btn-outline-primary' onClick={() => next()}>Siguiente</button>
            <button className='btn btn-outline-danger' onClick={() => before()}>Anterior</button>
        </>
    );
}

export default Personajes