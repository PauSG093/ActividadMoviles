import { useState } from "react";

export const Acumulador = () => {
    const [acumulador, setAcumulador] = useState(5);

    const incrementar = () => setAcumulador(acumulador + 5);
    const disminuir = () => setAcumulador(acumulador - 5);

    return (
        <div>
            <p>Valor del acumulador: {acumulador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
};
