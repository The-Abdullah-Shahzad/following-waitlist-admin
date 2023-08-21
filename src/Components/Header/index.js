import React, { useState } from 'react'
import {
  Container,
  SecButton,
  MobileContainer,
  ResponsiveMenu,
  MenuIcon,
  IconContainer
} from './styles'
import {
  GlobalOutlined,
  SettingOutlined,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons'
import { Avatar } from 'antd'
import { CiDark } from 'react-icons/ci'
import DropDown from '../Dropdown'
import SideMenu from '../SideMenu'

export default function Header () {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <Container>
        <IconContainer>
          <MenuIcon size={'large'} onClick={() => setMenu(!menu)} />
          <ResponsiveMenu showMenu={menu}>
            <SideMenu />
          </ResponsiveMenu>
        </IconContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SecButton>
            <GlobalOutlined />
            English
          </SecButton>
          <SecButton>
            <CiDark size={'1.3rem'} />
          </SecButton>
          <Avatar size='middle' icon={<UserOutlined />} />
          <SecButton>
            <SettingOutlined />
          </SecButton>
        </div>
      </Container>
      <MobileContainer>
        <IconContainer>
          <MenuOutlined onClick={() => setMenu(!menu)} />
          <ResponsiveMenu showMenu={menu}>
            <SideMenu />
          </ResponsiveMenu>
        </IconContainer>
        <DropDown header={true} />
      </MobileContainer>
    </>
  )
}
