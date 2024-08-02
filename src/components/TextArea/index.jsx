import PropTypes from "prop-types"

TextArea.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  setPlaceholder: PropTypes.func
}

export default function TextArea({ value, setValue, placeholder, setPlaceholder }) {
  return (
    <>
      <label htmlFor="description">Descrição</label>
      <textarea 
        name="description" 
        id="description"
        placeholder={placeholder}
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value)
          setPlaceholder("Insira uma descrição")
        }}
        ></textarea>
    </>
  )
}