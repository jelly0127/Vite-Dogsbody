import { useCallback, useMemo, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
import Header from './components/Header/Header'
import { GlobalStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/reducer'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style'
import React from 'react'
import ToastContainer from './components/Toast/ToastContainer'
import { ConfigProvider } from 'antd'
function App() {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useDispatch()
  const isDesktop = useSelector((state: { init: { isDesktop: boolean } }) => state.init.isDesktop)
  const isDark = useSelector((state: { init: { isDark: boolean } }) => state.init.isDark)

  useMemo(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [size.isDesktop])
  const getTheme = useCallback(() => {
    return { ...defaultTheme, isDesktop, isDark }
  }, [isDesktop, isDark])

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
          <ToastContainer />
        </ThemeProvider>
      </MyContext.Provider>
    </ConfigProvider>
  )
}

export default App
