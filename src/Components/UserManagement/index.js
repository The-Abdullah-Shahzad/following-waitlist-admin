import React, { useEffect, useState } from 'react'
import {
  MainContainer,
  CardHeader,
  CardTitle,
  CardBody,
  LisenceDiv,
  StatusDiv,
  TableContainer,
  CardFooter
} from './styles'
import PrimaryButton from '../Buttons/PrimaryButton'
import { AntTable } from '../Table/styles'
import DropDown from '../Dropdown'
import Pagination from '../Pagination'
import { Tooltip } from 'antd'
import ExportButton from '../Buttons/ExportButton'

export default function UserManagementComponent ({
  dataSource,
  getAll,
  totalPages,
  onVerify,
  reload
}) {
  const pageSize = 10
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const columns = [
    {
      title: (
        <Tooltip title='ID'>
          <span>ID</span>
        </Tooltip>
      ),
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      render: (__, { id }) => (
        <Tooltip title={`ID: ${id}`}>
          <span>{id}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='NAME'>
          <span>NAME</span>
        </Tooltip>
      ),
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (__, { name }) => (
        <Tooltip title={`Name: ${name}`}>
          <span>{name}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='EMAIL'>
          <span>EMAIL</span>
        </Tooltip>
      ),
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      render: (__, { email }) => {
        return (
          <Tooltip title={email}>
            <u>{email}</u>
          </Tooltip>
        )
      }
    },
    {
      title: (
        <Tooltip title='PHONE NUMBER'>
          <span>PHONE NUMBER</span>
        </Tooltip>
      ),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      fixed: 'left',

      render: (__, { phoneNumber }) => (
        <Tooltip title={`phone number: ${phoneNumber}`}>
          <span>{phoneNumber}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='LISENCED'>
          <span>LISENCED</span>
        </Tooltip>
      ),
      dataIndex: 'isLicensed',
      key: 'isLicensed',
      fixed: 'left',

      render: (__, { isLicensed }) => {
        return (
          <LisenceDiv lisenced={isLicensed}>
            {isLicensed ? 'Yes' : 'No'}
          </LisenceDiv>
        )
      }
    },
    {
      title: (
        <Tooltip title='SNAPCHAT'>
          <span>SNAPCHAT</span>
        </Tooltip>
      ),
      dataIndex: 'snapchat',
      key: 'snapchat',
      fixed: 'left',
      render: (__, { snapchat }) => (
        <Tooltip title={`ID: ${snapchat}`}>
          <span>{snapchat || '- -'}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='INSTAGRAM'>
          <span>INSTAGRAM</span>
        </Tooltip>
      ),
      dataIndex: 'instagram',
      key: 'instagram',
      fixed: 'left',
      render: (__, { instagram }) => (
        <Tooltip title={`ID: ${instagram}`}>
          <span>{instagram || '- -'}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='TIKTOK'>
          <span>TIKTOK</span>
        </Tooltip>
      ),
      dataIndex: 'tiktok',
      key: 'tiktok',
      fixed: 'left',
      render: (__, { tiktok }) => (
        <Tooltip title={`ID: ${tiktok}`}>
          <span>{tiktok || '- -'}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='STATUS'>
          <span>STATUS</span>
        </Tooltip>
      ),
      dataIndex: 'isVerified',
      key: 'isVerified',
      fixed: 'left',

      render: (__, { isApproved }) => {
        return (
          <StatusDiv status={isApproved}>
            {isApproved ? 'Verified' : 'Pending'}
          </StatusDiv>
        )
      }
    },
    {
      title: ' ',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'left',

      render: (__, { id, isApproved, email }) => {
        return (
          <DropDown
            id={id}
            email={email}
            state={isApproved}
            onVerify={onVerify}
          />
        )
      }
    }
  ]

  useEffect(() => {
    getAll(currentPage)
  }, [currentPage, reload])

  return (
    <MainContainer>
      <CardHeader>
        <CardTitle>Waitlist Users</CardTitle>
        <ExportButton userData={dataSource} />
      </CardHeader>
      <CardBody>
        <TableContainer>
          <AntTable
            className='antTable'
            size='middle'
            columns={columns}
            dataSource={dataSource?.slice(startIndex, endIndex)} // Display only the records for the current page
            pagination={false}
          />
        </TableContainer>
      </CardBody>
      <CardFooter>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </MainContainer>
  )
}
