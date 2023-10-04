import React, { useEffect, useState } from 'react'
import UserManagementComponent from '../../Components/UserManagement'
import axios from 'axios'
import { APPROVE_USER, DELETE_USER, GET_USERS_PROD } from '../../utils/API'
import { useNavigate, useLocation } from 'react-router-dom'

export default function UserManagementContainer () {
  const token = localStorage.getItem('token')
  const [reload, setReload] = useState(false)
  const [usersData, setUsersData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const location = useLocation()

  // Get All Users API
  const getAll = page => {
    axios
      .get(GET_USERS_PROD, {
        headers: { token: token }
      })
      .then(function (response) {
        console.log(response)
        setUsersData(response.data)
      })
      .catch(function (error) {
        if (error.response && error.response.status === 403) {
          console.log('403 Forbidden error. Clearing local storage...')
          localStorage.removeItem('token') // Clear the token
          navigate('/')
        }
      })
  }

  // Verify / No verify user
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

  useEffect(() => {
    // Extract page parameter from URL and set it as currentPage
    const queryParams = new URLSearchParams(location.search)
    const pageParam = queryParams.get('page')
    const page = pageParam ? parseInt(pageParam) : 1
    setCurrentPage(page)
    // Fetch data when currentPage or reload changes
    getAll(page)
  }, [currentPage, reload])

  const handlePageChange = page => {
    // setCurrentPage(page)
    // Navigate to the new route using the page parameter
    navigate(`/users?page=${page}`)
  }

  const dataFiller = () => {}

  return (
    <UserManagementComponent
      usersData={usersData?.data}
      totalUsers={usersData?.total}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} // Pass setCurrentPage as a prop
      onPageChange={handlePageChange}
      reload={reload}
      setReload={setReload}
      onVerify={approveUser}
      onDelete={deleteUser}
    />
  )
}


