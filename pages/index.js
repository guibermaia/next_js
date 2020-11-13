import { useState } from 'react';

function Home() {
    return (
        <div>
            Home
            <Contador />
        </div>
    )
}



function Contador() {
    const [contador, setContador] = useState(1)

    function adicionar() {
        setContador(contador + 1);
    }
    function remover() {
        setContador(contador - 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionar}>ADICIONAR</button>
            <button onClick={remover}>REMOVER</button>
        </div>
    )
}
export default Home;