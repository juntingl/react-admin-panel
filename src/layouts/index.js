import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import SiderWrapper from './Sider';
import HeaderWrapper from './Header';
import FooterWrapper from './Footer';
import './index.less';

// mock
import { menuList } from '@/mock'

const { Content } = Layout;

class Skeleton extends React.Component {
  state = {
    collapsed: false,
    menuList: []
  };

  componentDidMount() {
    this.fetchMenu();
  }

  fetchMenu = (data) => {
    this.setState({
      menuList
    })
  }

  toggle = (collapsed) => {
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    return (
      <Layout id="skeleton">
{/* 左侧边栏 Start */}
        <SiderWrapper
          collapsed={this.state.collapsed}
          menuList={menuList}
          >
          {
            () => (<div className="logo" />)
          }
        </SiderWrapper>
{/* 左侧边栏 End */}

{/* 右侧内容区 Start */}
        <Layout className="site-layout">
  {/* 头部 Start */}
          <HeaderWrapper collapsed={this.state.collapsed} toggle={this.toggle} />
  {/* 头部 End */}
          <div className="page-header">
            <div className="page-header-content">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                  Application Center
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  Application List
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

  {/* 主题内容区 Start */}
          <Content
            className="site-layout-background"
            style={{
              margin: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
  {/* 主题内容区 End */}

  {/* 底部 Start */}
          <FooterWrapper footerContent="Ant Design ©2018 Created by Ant UED"/>
  {/* 底部 End */}
        </Layout>
{/* 右侧内容区 End */}
      </Layout>
    );
  }
}

export default Skeleton;