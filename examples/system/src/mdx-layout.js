import React from 'react'
import { Content, Typography } from 'gatsby-theme-system'
import Layout from './layout'

export default props =>
  <Layout>
    <Typography scoped>
      <Content>
        {props.children}
      </Content>
    </Typography>
  </Layout>
