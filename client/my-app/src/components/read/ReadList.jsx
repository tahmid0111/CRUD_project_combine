import { useState, useEffect} from 'react'

const ReadList = () => {

    const [data, setData] = useState([])


    useEffect(()=> {
        fetch('/api/v1/read')
        .then(res => res.json())
        .then(data => setData(data.data))
    }, [])
  return (
    <div className='container mx-auto'>
        {
            data.map((item, index) => {

                const {firstName, lastName, gender, dateOfBirth, nationality, address, Email, phone, admissionDate, courses} = item

                const formattedDateOfBirth = dateOfBirth.slice(0, 10);
                const formattedDate = admissionDate.slice(0, 10);

                return (

                <div key={index} className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body">

                    <h2 className="card-title">Full name : {firstName} {lastName}</h2>
                    <p>Gender : {gender}</p>
                    <p>date of birth : {formattedDateOfBirth}</p>
                    <p>Nationality : {nationality}</p>
                    <p>Address : {address}</p>
                    <p>Email : {Email}</p>
                    <p>Phone : {phone}</p>
                    <p>Admission Date : {formattedDate}</p>
                    <p>Phone : {phone}</p>
                    <p>Courses : {courses}</p>

                    <div className="card-actions justify-end">

                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-primary">Delete</button>

                    </div>
                </div>
               </div>

            )})
        }
    </div>
  )
}

export default ReadList
