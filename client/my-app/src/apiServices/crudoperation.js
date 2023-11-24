import axios from "axios"

// export const read = () => {
//     fetch('/api/v1/read')
//     .then(res => res.json())
//     .then(data => setTask(data.data))
// }

export const CreateTask = (task) => {
    const {username, email, taskstatus, taskdesc} = task
    let reqBody ={
        UserName: username,
        Email: email,
        TaskStatus: taskstatus,
        TaskDesc: taskdesc
    }

    let URL = '/api/v1/create'

    return axios.post(URL, reqBody)
    .then(res => {
        if(res.status == 200){
            return console.log('success')
        }else{
            return console.log('fail')
        }
    })
}