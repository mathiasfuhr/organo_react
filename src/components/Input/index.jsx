import "./Input.css";

const Input = (props) => {
  
  const placeholderModificada = `Digite o seu ${props.label.toLowerCase()}...`;

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada}/>
    </div>
  );
};

export default Input;
