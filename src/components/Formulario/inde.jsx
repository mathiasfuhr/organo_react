import Botao from "../Botao";
import Input from "../Input";
import ListaSuspensa from "../ListaSupensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Frond-End",
    "Data-Science",
    "Devops",
    "UX-UI",
    "Mobile",
    "Inovação e Gestão",
  ];


  const aoSalvar = (event)=>{
    event.preventDefault()
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do colaborador</h2>
        <Input label="Nome" placeholder="Digite o seu nome" />
        <Input label="Cargo" placeholder="Digite o cargo" />
        <Input label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
