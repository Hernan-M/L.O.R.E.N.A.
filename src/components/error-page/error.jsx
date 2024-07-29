import { Button } from "@nextui-org/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" px-4 gap-4 flex flex-col text-center h-screen items-center justify-center">
      <h1 className="text-4xl text-extrabold">Ops!!!</h1>    
      <p className="text-2xl ">Um erro aconteceu, esta página não existe.</p>
      <p>
        <i>({error.statusText || error.message})</i>
      </p>
      <img src="../../../public/imgs/error.png" className="w-[200px]"/>
      <Link to={"/"}>
        <Button color="primary" variant="shadow" className="p-6 text-white">Voltar ao inicio</Button>
      </Link>
      
    </div>
  );
}