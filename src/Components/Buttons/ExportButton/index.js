import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import PrimaryButton from '../PrimaryButton'
import { MobileBtn } from './styles'
import { ExportOutlined } from '@ant-design/icons'
import * as XLSX from 'xlsx'
import { GET_ALL_USERS } from '../../../utils/API'
import axios from 'axios'

export default function ExportButton ({ userData, single, mobileView }) {
  const generateMultiUserPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(18)
    doc.text('User Data', 10, 10) // Add a title

    const tableData = userData.map(user => [
      user.name,
      user.email,
      user.phoneNumber,
      user.snapchat || '- -',
      user.instagram || '- -',
      user.tiktok || '- -',
      user.isLicensed ? 'Yes' : 'No',
      user.isApproved ? 'Verified' : 'Pending'
    ])

    // Define the columns for the table
    const tableColumns = [
      'Name',
      'Email',
      'Phone Number',
      'Snapchat',
      'Instagram',
      'TikTok',
      'Licensed',
      'Status'
    ]

    doc.setFontSize(20)
    doc.autoTable({
      head: [tableColumns], // Add the table headers
      body: tableData, // Add the table data
      startY: 20, // Start the table from vertical position 20
      theme: 'grid', // Set the theme to 'plain'
      styles: {
        fontSize: 10
      }
    })

    doc.save('user_data.pdf') // Save the PDF
  }

  const generateSingleUserPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(18)
    doc.text('User Details', 10, 10) // Add a title

    const lineHeight = 10

    doc.setFontSize(11)
    doc.text(`Name: ${userData.name}`, 10, 20)
    doc.text(`Email: ${userData.email}`, 10, 20 + lineHeight)
    doc.text(`Phone Number: ${userData.phoneNumber}`, 10, 20 + lineHeight * 2)
    doc.text(
      `Accepted Invites: ${userData.referralCount}`,
      10,
      20 + lineHeight * 3
    )
    doc.text(`Snapchat: ${userData.snapchat || '- -'}`, 10, 20 + lineHeight * 4)
    doc.text(
      `Instagram: ${userData.instagram || '- -'}`,
      10,
      20 + lineHeight * 5
    )
    doc.text(`TikTok: ${userData.tiktok || '- -'}`, 10, 20 + lineHeight * 6)
    doc.text(
      `Licensed: ${userData.licensed ? 'Yes' : 'No'}`,
      10,
      20 + lineHeight * 7
    )
    doc.text(
      `Status: ${userData.status === 'verified' ? 'Verified' : 'Pending'}`,
      10,
      20 + lineHeight * 8
    )

    doc.save(`${userData.name}_details.pdf`) // Save the PDF with user's name
  }
  return mobileView ? (
    <MobileBtn>
      <ExportOutlined
        onClick={single ? generateSingleUserPDF : generateMultiUserPDF}
      />
    </MobileBtn>
  ) : (
    <PrimaryButton
      text={'Export Record'}
      onClick={single ? generateSingleUserPDF : generateMultiUserPDF}
    />
  )
}

export const ExportAsExcel = ({ mobileView }) => {
  const token = localStorage.getItem('token')

  // For exporting as Excel sheets --------------------------------------------------------------------------------------------------------------------------------------

  // Fetch reqquest
  const getAll = async () => {
    try {
      const response = await axios.get(GET_ALL_USERS, {
        headers: { token: token }
      })
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const exportToExcel = async () => {
    // Extract only the fields you want from each object

    const data = await getAll()

    const filteredData = data.map(user => ({
      Influencer_ID: `${user.id}`,
      Name: user.name,
      Email: user.email,
      Phone_Number: user.phoneNumber,
      City: user.city,
      Content_Category: user.contentCategory,
      Verified: user.isVerified ? 'Yes' : 'No',
      Snapchat: user.snapchat,
      Instagram: user.instagram,
      Tiktok: user.tiktok,
      Licensed: user.isLicensed ? 'Yes' : 'No',
      Accepted_Invites: `${user.referralCount}`
    }))
    const ws = XLSX.utils.json_to_sheet(filteredData)

    // Define column headers with styles
    const headers = [
      {
        t: 'Influencer_ID',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: {
            bgColor: { rgb: 'FFFF00' },
            fgColor: { rgb: '000000' }
          },
          alignment: { horizontal: 'center' }
        },
        wpx: 80
      },
      {
        t: 'Name',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 120
      },
      {
        t: 'Email',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Phone_Number',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'City',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Content_Category',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Verified',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Snapchat',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Instagram',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Tiktok',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Licensed',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: { horizontal: 'center' }
        },
        wpx: 200
      },
      {
        t: 'Accepted_Invites',
        s: {
          fontSize: 12,
          fontWeight: 'bold',
          fill: { bgColor: { rgb: 'FFFF00' }, fgColor: { rgb: '000000' } },
          alignment: 'center'
        },
        wpx: 100
      }
    ]

    ws['!cols'] = headers

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'user_data.xlsx'
    a.click()
    URL.revokeObjectURL(url)
  }

  return mobileView ? (
    <MobileBtn>
      <ExportOutlined onClick={exportToExcel} />
    </MobileBtn>
  ) : (
    <PrimaryButton text={'Export Record'} onClick={exportToExcel} />
  )
}
