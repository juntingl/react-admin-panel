import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

class HeaderWrapper extends Component {

  toggle = () => {
    this.props.toggle(this.props.collapsed)
  }

  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: this.toggle,
      })}
      </Header>
    );
  }
}

HeaderWrapper.propTypes = {
  collapsed: PropTypes.bool.isRequired
}

export default HeaderWrapper;