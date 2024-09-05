import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";
import ListaSuspensa from "../ListaSupensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do colaborador</h2>
        <Input
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <Input
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo"
        />
        <Input
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
         valor={time}
         aoAlterado={(valor) => setTime(valor)}
         obrigatorio={true} 
         label="Time" 
         itens={props.times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
