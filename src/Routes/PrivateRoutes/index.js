import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../../Containers/Layout'

export default function PrivateRoutes () {
  const token = localStorage.getItem('token')
  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to='/' />
  )
}
