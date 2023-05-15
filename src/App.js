import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
const [name, setName] = useState('')
const [email, setemail] = useState('')
const [company, setCompany] = useState('')

const handleChange = (event)=> {
  console.log(event)
  if(event.target.name === 'name'){
    setName(event.target.value)
  } else if (event.target.name === 'email'){
    setemail(event.target.value)
  } else if(event.target.name==='company'){
    setCompany(event.target.value)
  }
}

  const handleClick = ()=>{
    console.log('values are', name, company, email)
    axios.post('http://localhost:8585/docu-sign',{name, email, company}).then((res)=>{
      window.location.href = res.data.url;
    }, (err)=>{
      console.log('error is ', err)
    })
  }
  return (
    <div className="App">
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <label>Email</label>
        <input type='email' name='email' value={email} onChange={handleChange}/>
        <label>Company</label>
        <input type='text' name='company' value={company} onChange={handleChange}></input>
        <button className={'doc-submit'} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
