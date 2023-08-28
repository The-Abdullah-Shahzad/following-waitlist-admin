import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes () {
  const token = localStorage.getItem('token')
  return !token ? <Outlet /> : <Navigate to='/users' />
}
