import Button from "../Button"
import NumberInput from "../NumberInput"
import Select from "../Select"
import TextArea from "../TextArea"
import TextInput from "../TextInput"
import styles from "./styles.module.css"
import useItemManagement from "../../hooks/useItemManagement"
import PropTypes from "prop-types"
import usePlaceholderManagement from "../../hooks/usePlaceholderManagement"

Form.propTypes = {
  functionForm: PropTypes.func
}

export default function Form({ functionForm }) {
  const { item } = useItemManagement()
  const { itemPlaceholder } = usePlaceholderManagement()
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <TextInput 
          value={item.name} 
          setValue={item.setName} 
          placeholder={itemPlaceholder.namePlaceholder}
          setPlaceholder={itemPlaceholder.setNamePlaceholder}
        />
        <NumberInput 
          text="Quantidade" 
          id="amount"
          value={item.amount} 
          setValue={item.setAmount} 
          placeholder={itemPlaceholder.amountPlaceholder}
          setPlaceholder={itemPlaceholder.setAmountPlaceholder}
        />
        <NumberInput 
          text="Preço" 
          id="price"
          value={item.price} 
          setValue={item.setPrice}
          placeholder={itemPlaceholder.pricePlaceholder}
          setPlaceholder={itemPlaceholder.setPricePlaceholder}
        />
        <Select value={item.category} setValue={item.setCategory} />
      </div>
      <div className={styles.description}>
        <TextArea 
          value={item.description} 
          setValue={item.setDescription}
          placeholder={itemPlaceholder.descriptionPlaceholder}
          setPlaceholder={itemPlaceholder.setDescriptionPlaceholder}
        />
      </div>
      <span className={styles.buttonForm}>
        <Button onClick={functionForm}>Salvar</Button>
      </span>
    </form>
  )
}