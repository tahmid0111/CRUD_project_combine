import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Create from './components/create/Create'

function App() {

  const [task, setTask] = useState([])

  useEffect(()=> {

    axios.get('/api/v1/read')
    .then(res => {setTask(res.data.data)})
    .catch(err => console.log(err))

  },[])

  return (
    <>
      {/* {
        task.map((item,i)=>{
          const {UserName, Email, TaskStatus, TaskDesc} = item
          return <div key={i}>
            <h1>{UserName}</h1>
            <h1>{Email}</h1>
            <h1>{TaskStatus}</h1>
            <h1>{TaskDesc}</h1>
          </div>
        })
      } */}
      <Create />
    </>
  )
}

export default App
