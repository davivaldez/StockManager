import PropTypes from "prop-types"

TextInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  setPlaceholder: PropTypes.func
}

export default function TextInput({ value, setValue, placeholder, setPlaceholder }) {
  return (
    <div>
      <label htmlFor="name">Nome</label>
      <input 
        type="text" 
        id="name"
        placeholder={placeholder}
        name="name"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value)
          setPlaceholder("Insira um nome")
        }}
      />
    </div>
  )
}