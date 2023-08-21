import React from 'react'
import UserManagementContainer from '../../Containers/UserManagement'
import Page from '../../Components/Page'
import PageHead from '../../Components/PageHead'

export default function UserManagement () {
  const heading = 'User Management Module'
  return (
    <Page>
      <PageHead heading={heading} />
      <UserManagementContainer />
    </Page>
  )
}
