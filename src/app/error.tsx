"use client"

type Props={
    error:Error;
    reset:()=>void;
}

export default  function error({error,reset}: Props) {
    return(
        <div>
            {<div>Il ya une erreur : {error?.message}</div>}
            <p>
                <button onClick={reset}>Reessayer</button>
            </p>
        </div>
    )
}