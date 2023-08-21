import React from 'react'

import { HomeOutlined, CaretRightOutlined } from '@ant-design/icons'
import { MainMenu } from './styles'

export default function SideMenu () {
  function getItem (label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    }
  }

  const items = [
    getItem(
      'MAIN',
      'g1',
      null,
      [getItem('Dashboard', 'sub1', <HomeOutlined />)],
      'group'
    ),

 getItem(
      'MODULES',
      'g2',
      null,
      [
    getItem('User Management', 'sub2', null, [
      getItem('Merchants', 'sub2-sub1', <CaretRightOutlined />, [
        getItem('All Merchants', '5', <CaretRightOutlined />),
        getItem('Create New Merchants', '6', <CaretRightOutlined />)
      ]),
      getItem('Influencer', 'sub3', null, [
        getItem('Influencer Record', '7', <CaretRightOutlined />),
        getItem('Create Influencer', '8', <CaretRightOutlined />)
      ])
    ]),
    getItem('Campaign Management', 'sub4', null, [
      getItem('Create Campaign', '9', <CaretRightOutlined />),
      getItem('Monitor Campaign', '10', <CaretRightOutlined />)
    ]),
    getItem('Payments Management', 'sub5', null, [
      getItem('Manage Payments', '11', <CaretRightOutlined />),
      getItem('Influencer Withdrawal Request', '12', <CaretRightOutlined />)
    ]),
    getItem('Support Management', 'sub6', null, [
      getItem('Manage', '13', <CaretRightOutlined />)
    ]),
    getItem('Report Management', 'sub7', null, [
      getItem('Monitor & analyze', '14', <CaretRightOutlined />),
      getItem('Campaign Performance', '15', <CaretRightOutlined />),
      getItem('Payment Transactions', '16', <CaretRightOutlined />)
    ]),
    getItem('Settings', 'sub8', null, [
      getItem('System Parameters', '17', <CaretRightOutlined />)
    ])],'group')
  ]
  const onClick = e => {
    console.log('click ', e)
  }

  return (
    <MainMenu
      onClick={onClick}
      style={{
        width: '15rem',
        border: 'none'
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  )
}
