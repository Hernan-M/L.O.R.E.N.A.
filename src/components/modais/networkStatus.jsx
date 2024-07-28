import { Button } from "@nextui-org/react"

const NetworkStatus = () => {
  return (
    <div className="z-10 bg-gray-800/[0.9] absolute place-content-center h-screen w-full top-0 left-0 flex-col text-center ">
        <h1>Verifique sua conexão com a internet e tente novamente</h1>
        <Button className="mt-6" onClick={() => window.location.reload()}>Atualizar página</Button>
    </div>
  )
}

export default NetworkStatus