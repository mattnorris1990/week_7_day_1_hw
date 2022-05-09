import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [items, setItems] = useState([
    {name: "Buy Shopping", priority: "high"},
    { name:"Clean Bathroom", priority: "low"},
    {name: "Car's MOT", priority: "low"}
  ])

  const [newDescription, setNewDescription] = useState("Enter new Description here")

  const [newPriority, setNewPriority] = useState("")

  const itemToDisplay = items.map((item, index) => {
    return (
      <li key={index} className={item.priority}>
        {item.name}
      </li>
    )
  })

  const handleItemInput = (event) => {
    setNewDescription(event.target.value)

  }

  const handleChange = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault()
    const copyItem = [... items]
    copyItem.push({name: newDescription, priority: newPriority})
    setItems(copyItem)
    setNewDescription("")
  }
    

  return (
    <div className="App">

      <h1>To Do's</h1>
      <hr></hr>

      <ul>
        {itemToDisplay}
      </ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>  
          <input id="new-item" type="text" onChange={handleItemInput} value={newDescription} />     
        
        <p>Priority:</p>
        <label htmlFor="high-priority">High</label>
        <input
          type="radio"
          name="task-priority"
          value="high"
          onChange = {handleChange}
          className="form-check-input"
        />
        <label htmlFor="low-priority">Low</label>
        <input
          type="radio"
          name="task-priority"
          value="low"
          onChange = {handleChange}
          className="form-check-input"
        />
      

      <input type="submit" value="Save New Item" /> 
      </form>

    </div>
  );

}
export default App;
