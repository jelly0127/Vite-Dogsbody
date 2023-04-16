import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '@/style'
const Box = styled.div`
  ${flexCenter}
  height: 50vh;
  width: 100%;
`
export default function NotFound() {
  return <Box>Page Not Found (404)</Box>
}
