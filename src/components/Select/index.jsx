import PropTypes from "prop-types"

Select.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default function Select({ value, setValue }) {
  return (
    <div>
      <label htmlFor="category">Categoria</label>
      <select 
        name="category" 
        id="category"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        >
          <option disabled value="none">Selecione uma categoria...</option>
          <option value="games">Jogos</option>
          <option value="books">Livros</option>
          <option value="movies">Filmes</option>
          <option value="collectibles">Colecionáveis</option>
      </select>
    </div>
  )
}