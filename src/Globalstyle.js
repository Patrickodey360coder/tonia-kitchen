import React from 'react'
import styled from 'styled-components'

const Reset = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function Globalstyle(props) {
  return (
   <Reset>{props.children}</Reset>
  )
}

export default Globalstyle
