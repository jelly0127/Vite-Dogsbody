import { useCallback, useEffect, useState } from 'react'
//定义size对象
interface WindowSize {
  width: number
  height: number
  isDesktop: boolean
}
const WIDTH = 768

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    isDesktop: document.documentElement.clientWidth > WIDTH ? true : false,
  })
  const fun = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      isDesktop: document.documentElement.clientWidth > WIDTH ? true : false,
    })
  }, [size.isDesktop])
  useEffect(() => {
    window.addEventListener('resize', fun)
    return () => {
      window.removeEventListener('resize', fun)
    }
  }, [])

  return size
}

export default useWindowSize
