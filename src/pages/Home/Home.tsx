import React from 'react'
import styled from 'styled-components'
import Content from '../components/Content/Content'
import TopBox from '../components/TopBox/TopBox'
import Footer from '../components/Footer/Footer'
import { flexCenter } from '@/style'

const ContentBox = styled.div`
  height: 100%;
  padding-bottom: 36px;
  min-width: 1170px;
  ${flexCenter}/* background-color: #ffffff; */
`
export default function Home() {
  return (
    <>
      <ContentBox>
        <TopBox telegramSrc={''} learnSrc={''}></TopBox>
        <Content />
        <Footer />
      </ContentBox>
    </>
  )
}
