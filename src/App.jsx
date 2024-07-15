import Perfil from "./Components/Perfil/index";
import Formulario from "./Components/Formulario";
import { useState } from "react";
import ReposList from "./Components/ReposList";



function App() {
  // const [forumlarioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
    

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario} />
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {forumlarioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!forumlarioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
