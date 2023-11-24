import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const[empData,setEmpData] =useState([])
    useEffect(()=>{
        const employedata = async()=> { 
            try {
                const empList = await axios.get('https://6461c1c2491f9402f4aa0565.mockapi.io/employee')
                setEmpData([...empList.data])
                // console.log(empList.data);
            } catch (error) {
                console.error(error)
            }
            }
            employedata()
    },[])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link to='/create-user'  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Create User</Link>
            </div>


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        empData.map((employee)=>{
                                            return <tr>
                                            <td>{employee.username}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.office}</td>
                                            <td>{employee.dob}</td>
                                            <td>{employee.startDate}</td>
                                            <td>{employee.salary}</td>
                                            <td>
                                            <Link to={`/view-user/${employee.id}`} className='btn btn-sm btn-info'>View</Link>
                                            <Link to={`/edit-user/${employee.id}`} className='btn btn-sm btn-warning ml-2'>Edit</Link>
                                                <button className='btn btn-sm btn-danger ml-2'>Delete</button>
                                            </td>
                                        </tr>

                                        })
                                    }
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default User