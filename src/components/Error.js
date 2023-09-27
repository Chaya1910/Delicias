import { useRouteError } from "react-router-dom";
import ErrorIcon from '../assets/img/ErrorIcon.png';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
    <img className="h-48 w-48 inline-block" src={ErrorIcon} alt="logo"></img>
      <h1 className="font-bold text-md">Oops, Something went wrong!!</h1>
      <p className="font-light text-sm">Please try to refresh the page</p>
      <h2 className="font-light text-sm">{err.status + " " + err.statusText}</h2>
    </div>
  );
};

export default Error;
