import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderWrapper extends Component {

  state = {
    mode: 'inline',
    theme: 'dark',
  }

  componentDidMount(){

  }

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.path}>
            {
              this.renderMenu(item.children)
            }
          </SubMenu>
        )
      }
    return <Menu.Item title={item.title} key={item.path}>{item.title}</Menu.Item>
    })
  }

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    return (
      <Sider
        width="256"
        trigger={null}
        collapsed={this.props.collapsed}
        collapsible
        >
        {
          this.props.children()
        }
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
          >
          {
            this.renderMenu(this.props.menuList)
          }
        </Menu>
      </Sider>
    );
  }
}

SiderWrapper.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  children: PropTypes.func,
  menuList: PropTypes.array
};

export default SiderWrapper;