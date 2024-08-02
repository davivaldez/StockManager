import PropTypes from "prop-types"

NumberInput.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  setPlaceholder: PropTypes.func
}

export default function NumberInput({ text, id, value, setValue, placeholder, setPlaceholder }) {
  return (
  <div>
    <label htmlFor={id}>{text}</label>
    <input 
      type="number" 
      id={id}
      placeholder={placeholder}
      name={id} 
      value={value}
      onChange={(ev) => {
        if (ev.target.name === "amount") {
          setPlaceholder("Insira uma quantidade");
        } else {
          setPlaceholder("Insira um preço");
        }

        setValue(ev.target.value)
      }}
    />
  </div>
  )
}