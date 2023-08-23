import React, { useEffect, useState } from 'react'
import UserManagementComponent from '../../Components/UserManagement'
import axios from 'axios'
import { GET_USERS, APPROVE_USER } from '../../utils/API'
import { useNavigate } from 'react-router-dom'
import { DELETE_USER } from '../../utils/API'

export default function UserManagementContainer () {
  const [reload, setReload] = useState(false)
  const token = localStorage.getItem('token')
  const [users, setUsers] = useState({})
  const navigate = useNavigate()

  // Get All Users API
  const getAll = page => {
    axios
      .get(GET_USERS + `?page=${page}&per_page=10`, {
        headers: { token: token }
      })
      .then(function (response) {
        console.log(response)
        setUsers(response.data)
      })
  }

  //Verify / No verify user
  const approveUser = (email, verification) => {
    axios
      .put(
        APPROVE_USER,
        { email: email, isApproved: verification },
        {
          headers: { token: token }
        }
      )
      .then(function (res) {
        console.log(res)
        navigate('/users')
        setReload(!reload)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  // Delete Users
   const deleteUser = email => {
    axios
      .put(
        DELETE_USER,
        { email: email },
        {
          headers: { token: token }
        }
      )
      .then(function (res) {
        console.log(res)
        setReload(!reload)
      })
      .catch(function (error) {
        console.error(error)
      })
  }


  return (
    <UserManagementComponent
      reload={reload}
      dataSource={users?.data}
      getAll={getAll}
      totalPages={users?.total_pages}
      onVerify={approveUser}
      onDelete = {deleteUser}
    />
  )
}
