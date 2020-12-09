import { useState } from 'react';
import useFormValidation from '../hooks/useFormValidation';

const AddItemForm = () => {

  const initialState = {
    name: "",
    description: "",
    price: ""
  }

  const [items, setItems] = useState([])

  const [item, setItem] = useState(initialState);

  const [isSubmitted, setIsSubmitted] = useState(false)

  const resetForm = () => {
    setItem({
      name: '',
      description: '',
      price: ''
    })
  }

  const handleItemChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = (e) => {}

  const submitForm = () => {

    // adding items locally, not persisted in database
    setItems(items.concat(item))

    resetForm()

    alert("Successfully added new item")
  }

  const {
    handlePresenceValidation,
    errors
  } = useFormValidation(submitForm, isSubmitted)

  const handleSubmit = (e) => {
    setIsSubmitted(true)
    handlePresenceValidation({...item});
  }

  const errorList = Object.entries(errors)

  return(
    <div>
      <ul>
        {
          errorList.map((err, idx) => (
            <li key={idx}>
              {err[0]}: {err[1]}
            </li>
          ))
        }
      </ul>

      <ul>
        {
          items.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))
        }
      </ul>

      <h1>Add Item Form</h1>

      <form>
        <input
          type="text" 
          name="name"
          placeholder="Enter name"
          onChange={handleItemChange}
          value={item.name}
        >
        </input>

        <br></br>
        <br></br>

        <textarea
          name="description"
          placeholder="Enter description"
          onChange={handleItemChange}
          value={item.description}
        >
        </textarea>

        <br></br>
        <br></br>

        <input
          type="text" 
          name="price"
          placeholder="Enter price"
          onChange={handleItemChange}
          value={item.price}
        >
        </input>

        <br></br>
        <br></br>

        <button
          type="button"
          onClick={handleImageUpload}
        >
          Upload Image
        </button>

        <br></br>
        <br></br>

        <button
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddItemForm;
