import Banner from "./components/Banner";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Banner />
      <Input label="Nome" placeholder="Digite o seu nome" />
      <Input label="Cargo" placeholder="Digite o cargo" />
      <Input label="Imagem" placeholder="Digite o endereço da imagem" />
      <Input label="Time" placeholder="Digite o seu time" />
    </div>
  );
}

export default App;
