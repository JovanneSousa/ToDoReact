import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }
    window.addEventListener('resize', onResize)
  }, [breakpoint, isMobile])
  return isMobile
}

export default useIsMobile
