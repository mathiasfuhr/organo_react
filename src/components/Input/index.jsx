import "./Input.css";

const Input = (props) => {
  
  const placeholderModificada = `Digite o seu ${props.label.toLowerCase()}...`;
  
  
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>
  );
};

export default Input;
