import React from 'react'
import jsPDF from 'jspdf'
import PrimaryButton from '../PrimaryButton'

export default function ExportButton ({ userData, single }) {
  const generateMultiUserPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(18)
    doc.text('User Data', 10, 10) // Add a title

    const yOffset = 20
    const lineHeight = 10

    doc.setFontSize(11)
    userData.forEach((user, index) => {
      doc.text(`Name: ${user.name}`, 10, yOffset + index * lineHeight)
      doc.text(
        `Email: ${user.email}`,
        10,
        yOffset + index * lineHeight + lineHeight
      )
      doc.text(
        `Phone Number: ${user.phoneNumber}`,
        10,
        yOffset + index * lineHeight + lineHeight * 2
      )
      doc.text(
        `Snapchat: ${user.snapchat || '- -'}`,
        10,
        yOffset + index * lineHeight + lineHeight * 3
      )
      doc.text(
        `Instagram: ${user.instagram || '- -'}`,
        10,
        yOffset + index * lineHeight + lineHeight * 4
      )
      doc.text(
        `TikTok: ${user.tiktok || '- -'}`,
        10,
        yOffset + index * lineHeight + lineHeight * 5
      )
      doc.text(
        `Licensed: ${user.licensed ? 'Yes' : 'No'}`,
        10,
        yOffset + index * lineHeight + lineHeight * 6
      )
      doc.text(
        `Status: ${user.status === 'verified' ? 'Verified' : 'Pending'}`,
        10,
        yOffset + index * lineHeight + lineHeight * 7
      )

      if (index < userData.length - 1) {
        doc.line(
          10,
          yOffset + index * lineHeight + lineHeight * 8,
          200,
          yOffset + index * lineHeight + lineHeight * 8
        ) // Draw a line to separate users
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
    doc.text(`Snapchat: ${userData.snapchat || '- -'}`, 10, 20 + lineHeight * 3)
    doc.text(
      `Instagram: ${userData.instagram || '- -'}`,
      10,
      20 + lineHeight * 4
    )
    doc.text(`TikTok: ${userData.tiktok || '- -'}`, 10, 20 + lineHeight * 5)
    doc.text(
      `Licensed: ${userData.licensed ? 'Yes' : 'No'}`,
      10,
      20 + lineHeight * 6
    )
    doc.text(
      `Status: ${userData.status === 'verified' ? 'Verified' : 'Pending'}`,
      10,
      20 + lineHeight * 7
    )

    doc.save(`${userData.name}_details.pdf`) // Save the PDF with user's name
  }
  return (
    <PrimaryButton
      text={'Export Record'}
      onClick={single ? generateSingleUserPDF : generateMultiUserPDF}
    />
  )
}
