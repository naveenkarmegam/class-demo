import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Card from './Card'

const Dashboard = () => {
  return (
    <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
        </div>
        <div className="row">
          
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
    </>
  )
}

export default Dashboard