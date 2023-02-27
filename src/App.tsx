import { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/routerConfig'
import { MyContext } from './MyContext'
// import Header from './components/Header/Header'
import { GlobalStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from './hooks/isDesktop'
import { updateDesktop } from './redux/counterSlice'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style'
import CommunityLinkGroup from './components/CommunityLinkGroup/CommunityLinkGroup'
import React from 'react'
function App() {
  const element = useRoutes(routes)
  const size = useWindowSize()
  const [Name, setName] = useState('Im jelly')
  const dispatch = useDispatch()
  const isDesktop = useSelector((state: { counter: { isDesktop: boolean } }) => state.counter.isDesktop)

  console.log('isDesktop', isDesktop)
  useEffect(() => {
    dispatch(updateDesktop(size.isDesktop))
  }, [size.isDesktop])
  const getTheme = useCallback(() => {
    return { ...defaultTheme, isDesktop }
  }, [isDesktop])

  return (
    <MyContext.Provider value={{ Name, setName }}>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        {/* <Header /> */}
        {element}
        <CommunityLinkGroup />
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App
