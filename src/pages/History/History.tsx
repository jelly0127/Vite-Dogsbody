/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../MyContext'
import styled from 'styled-components'
import { Button } from 'antd'
import React from 'react'
import { memo } from 'react'

const Box = styled.div`
  color: #ffffff;
`

const History = memo(() => {
  const { Name, setName } = useContext(MyContext)
  return (
    <Box>
      <div>History page</div>
      <h1>useContext</h1>
      <div>接收到的context是{Name}</div>
      <Button
        onClick={() => {
          setName('test')
        }}
      >
        <p>changeName 'test'</p>
      </Button>
      <Link to={'/'}>black</Link>
    </Box>
  )
})
export default History
