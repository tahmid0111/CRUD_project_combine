import axios from 'axios'
import {useState} from 'react'

const RegistrationForm = () => {
    const [todo, setTodo] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        dateofbirth: "",
        nationality: "",
        address: "",
        email: "",
        phone: "",
        admissiondate: "",
        courses: "",
    })

    const {firstname,lastname,gender,dateofbirth,nationality,address,email,phone,admissiondate,courses} = todo

    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/v1/create', todo)
        .then((res) => {
            if(res.status===200){
                console.log('success') ;
             }
             else{
                console.log('false') ;
             }
        })
        setTodo({
            firstname: "",
            lastname: "",
            gender: "",
            dateofbirth: "",
            nationality: "",
            address: "",
            email: "",
            phone: "",
            admissiondate: "",
            courses: "",
        })
    }

    
  return (
    <div className='container mx-auto'>
      <form onSubmit={handleSubmit}>

        <div className='py-3'>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" name="firstname" value={firstname} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="lastname">Last Name : </label>
            <input type="text" name='lastname' value={lastname} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="gender">gender : </label>
            <input type="text" name='gender' value={gender} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="dateofbirth">Date Of Birth : </label>
            <input type="date" name='dateofbirth' value={dateofbirth} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="nationality">nationality : </label>
            <input type="text" name='nationality' value={nationality} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="address">address : </label>
            <input type="text" name='address' value={address} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="email">email : </label>
            <input type="email" name='email' value={email} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="phone">phone : </label>
            <input type="number" name='phone' value={phone} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="admissiondate">Admission Date : </label>
            <input type="date" name='admissiondate' value={admissiondate} onChange={handleChange} />
        </div>
        <div className='py-3'>
        <label htmlFor="courses">courses : </label>
            <input type="text" name='courses' value={courses} onChange={handleChange} />
        </div>
        <div>
            <button type="submit" className='btn btn-primary'>Register</button>
        </div>

      </form>
    </div>
  )
}

export default RegistrationForm
