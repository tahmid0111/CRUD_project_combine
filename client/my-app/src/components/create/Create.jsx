import {useState, useEffect} from 'react'
import {CreateTask} from '../../apiServices/crudoperation';

import axios from 'axios';

const Create = () => {
    const [task, setTask] = useState({username: '', email: '', taskstatus: '', taskdesc: ''})
    const {username, email, taskstatus, taskdesc} = task

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        

        let URL = '/api/v1/create'
        let reqBody = {
            UserName: username,
            Email: email,
            TaskStatus: taskstatus,
            TaskDesc: taskdesc
        }

        axios.post(URL, reqBody)
        .then(res => {
            if(res.status===200){
                return console.log('success')
            }else{
                return console.log('fail')
            }
        })




        setTask({username: '', email: '', taskstatus: '', taskdesc: ''})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
        <input type="text" name='username' value={username} onChange={handleChange} />
        </div>
        <div>
        <input type="text" name='email' value={email} onChange={handleChange} />
        </div>
        <div>
        <input type="text" name='taskstatus' value={taskstatus} onChange={handleChange} />
        </div>
        <div>
        <input type="text" name='taskdesc' value={taskdesc} onChange={handleChange} />
        </div>
        
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default Create
