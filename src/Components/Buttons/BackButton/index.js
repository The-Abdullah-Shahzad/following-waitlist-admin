import React from 'react'
import { Back } from './styles'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function BackButton () {
  const navigate = useNavigate()
  return (
    <Back type='secondary' onClick={() => navigate(-1)}>
      <ArrowLeftOutlined />
      Back
    </Back>
  )
}
