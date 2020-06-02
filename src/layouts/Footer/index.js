import React from 'react';
import { Layout } from 'antd'

const { Footer } = Layout;
const FooterWrapper = (props) => {
  return (
  <Footer style={{ textAlign: 'center' }}>{props.footerContent}</Footer>
  )
}

export default FooterWrapper;