import React, {useState} from 'react';

const AddItemForm = () => {

  const [items, setItems] = useState([])

  const [item, setItem] = useState({
    name: '',
    description: '',
    price: ''
  });

  const resetForm = () => {
    setItem({
      name: '',
      description: '',
      price: ''
    })
  }

  const isValid = () => {

    return(
      item.name !== "" && 
      item.description !== "" &&
      item.price !== ""
    )
  }

  const handleItemChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = (e) => {}

  const handleSubmit = (e) => {

    if(isValid()) {

      // adding items locally, not persisted in database
      setItems(items.concat(item))

      resetForm()

      alert("Successfully added new item")
    } 
    else {
      alert("Fields cannot be empty")
    }
  }

  return(
    <div>
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
