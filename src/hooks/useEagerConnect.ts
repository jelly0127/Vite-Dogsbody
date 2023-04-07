import { useEffect, useState } from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { injected } from '@/web3/constants/wallets'
import { isMobile } from 'web3modal'
import { connectorLocalStorageKey } from '@/web3/connectors/index'
export function useEagerConnect() {
  const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: any) => {
      const hasSignedIn = window.localStorage.getItem(connectorLocalStorageKey)
      if (isAuthorized && hasSignedIn) {
        activate(injected, undefined, true)
          // .then(() => window.ethereum.removeAllListeners(['chainChanged']))
          .catch(() => {
            setTried(true)
          })

        window.ethereum.removeAllListeners(['chainChanged'])
      } else {
        if (isMobile() && window.ethereum && hasSignedIn) {
          activate(injected, undefined, true)
            // .then(() => window.ethereum.removeAllListeners(['chainChanged']))
            .catch(() => {
              setTried(true)
            })

          window.ethereum.removeAllListeners(['chainChanged'])
        } else {
          setTried(true)
        }
      }
    })
  }, [activate])

  useEffect(() => {
    if (active) {
      setTried(true)
    }
  }, [active])

  return tried
}

export default useEagerConnect
