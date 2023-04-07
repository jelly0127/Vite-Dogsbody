import { ReactElement, useCallback, useMemo, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from '@/components/Header'
import { GlobalStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/counterSlice'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style'
import React from 'react'
import { ConfigProvider } from 'antd'

function App() {
  const element = useRoutes(routes) as ReactElement
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useDispatch()
  const isDesktop = useSelector((state: { counter: { isDesktop: boolean } }) => state.counter.isDesktop)

  useMemo(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [size.isDesktop])
  const getTheme = useCallback(() => {
    return { ...defaultTheme, isDesktop }
  }, [isDesktop])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F95997',
        },
      }}
    >
      <MyContext.Provider value={{ Name, setName }}>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyle />
          <Header />
          {element}
        </ThemeProvider>
      </MyContext.Provider>
    </ConfigProvider>
  )
}

export default App
