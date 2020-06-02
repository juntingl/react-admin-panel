import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header } = Layout;


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        个人设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

class HeaderWrapper extends Component {

  toggle = () => {
    this.props.toggle(this.props.collapsed)
  }

  render() {
    return (
      <Header className="site-layout-background header">
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}
        <div className="nav-right">
          <Dropdown className="nav-right-user" overlay={menu} placement="bottomRight">
            <span>
              <Avatar className="avatar" size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              Junting
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

HeaderWrapper.propTypes = {
  collapsed: PropTypes.bool.isRequired
}

export default HeaderWrapper;