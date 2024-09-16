import React from 'react'
import OrderTable from '../components/OrderTable'

const Dashboard = ({data}) => {
  return (
    <div>
        <OrderTable data={data} />
    </div>
  )
}

export default Dashboard