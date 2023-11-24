import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {
    const params = useParams()
    const [empdetails,setEmpDetails] = useState()
    useEffect(()=>{
        const getData = async ()=> {
            try {
                const employee = await axios.get(`https://6461c1c2491f9402f4aa0565.mockapi.io/employee/${params.id}`)
                setEmpDetails(employee.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])
  return (
    <div>
        {
            empdetails?<ul>
            <li>{empdetails?.username}</li>
            <li>{empdetails?.position}</li>
            <li>{empdetails?.office}</li>
            <li>{empdetails?.dob}</li>
            <li>{empdetails?.startDate}</li>
            <li>{empdetails?.salary}</li>
        </ul>: <div>Loading.... </div>
        }
    </div>
  )
}

export default ViewUser