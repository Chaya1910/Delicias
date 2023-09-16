import { useRouteError } from 'react-router-dom';

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <>
        <h1>Oops!!</h1>
        <p>Something went wrong</p>
        <h2>{err.status + " " + err.statusText}</h2></>
    )
}

export default Error;