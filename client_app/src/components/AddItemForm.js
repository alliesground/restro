import React, {useState} from 'react';

const AddItemForm = () => {

  const [items, setItems] = useState([])

  const [item, setItem] = useState({
    name: '',
    description: '',
    price: ''
  });

  const [errors, setErrors] = useState({})

  const resetForm = () => {
    setItem({
      name: '',
      description: '',
      price: ''
    })
  }

  const isValidForm = () => {

    setErrors({})

    let isValid = true

    if(!item.name) {
      isValid = false
      setErrors(prevErrors => ({...prevErrors, 'name': 'cannot be blank'}))
    }

    if(!item.description) {
      isValid = false
      setErrors(prevErrors => ({...prevErrors, 'description': 'cannot be blank'}))
    }

    if(!item.price) {
      isValid = false
      setErrors(prevErrors => ({...prevErrors, 'price': 'cannot be blank'}))
    }

    return isValid;
  }

  const handleItemChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = (e) => {}

  const handleSubmit = (e) => {

    if(isValidForm()) {

      // adding items locally, not persisted in database
      setItems(items.concat(item))

      resetForm()

      alert("Successfully added new item")
    } 
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
