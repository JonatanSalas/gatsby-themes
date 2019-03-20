import React from 'react'
import { useMDXComponents } from '@mdx-js/tag'
import styled from '@emotion/styled'

const Container = styled.div({
  maxWidth: '48em',
  margin: 'auto',
  padding: 32,
})

export const Layout = props => {
  const { Root, ...components } = useMDXComponents()
  console.log('Layout', props)

  return (
    <Container>
      <Root>
        {props.children}
      </Root>
    </Container>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <>
    {element}
  </>