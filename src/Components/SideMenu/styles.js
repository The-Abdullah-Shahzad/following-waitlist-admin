import styled from 'styled-components'
import { Menu } from 'antd'

export const MainMenu = styled(Menu)`
 
  .ant-menu-submenu {
    background-color: white;
  }

  .ant-menu-item:hover {
    background-color: white !important;
  }

  .ant-menu-sub {
    background: white !important;
  }

  .ant-menu-item-selected {
    background-color: white !important;
  }

  .ant-menu-item-group-title {
    font-size: 11px !important;
    padding-left: 24px;
  }

  .ant-menu-item {
    font-size: 13.3px;
    color: #74829c;
  }

  .ant-menu-submenu-title {
    font-size: 13.5px;
    color: #74829c;
  }

  .ant-menu-item.ant-menu-item-selected,
  .ant-menu-submenu-title.ant-menu-submenu-open {
    font-size: 15px;
    color: #74829c;
  }
`
