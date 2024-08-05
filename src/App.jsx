import { useState } from "react";
import { Users } from './components/Users';

function App() {
  const [searchUser, setSearchUser] = useState("")
  const [data, setData] = useState({
    name: "",
    surname: "",
    phonenumber: "",
})
const [user, setUser] = useState([
  {
    name: "Артём",
    surname: "Михайлов",
    phonenumber: "89992822234",
  }
])
const handleChange = (event) => {
  const { name, value } = event.target;
  setData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
}));
}
const sendUser = (e) => {
e.preventDefault()
setUser(prev => [...prev, data]);
}
const onChangesearchUser = (event) => {
  setSearchUser(event.target.value)
}
  return (
    <div className="App">
      <h1>Моя телефонная книга</h1>
      <div className="App__content">
        <div className="App__addUser">
          <input value={data.name} onChange={handleChange} className="add name" type="text" placeholder="Введите имя" name="name"></input>
          <input value={data.surname} onChange={handleChange} className="add surname" type="text" placeholder="Введите фамилию" name="surname"></input>
          <input value={data.phonenumber} onChange={handleChange} className="add phonenumber" type="tel" placeholder="Введите номер телефона" name="phonenumber"></input>
          <button type="submit" onClick={sendUser}>Добавить контакт</button>
        </div>
        <div className="App__users">
        <Users users={user} searchUser={searchUser} onChangesearchUser={onChangesearchUser}></Users>
        </div>

      </div>
    </div>
  );
}

export default App;
