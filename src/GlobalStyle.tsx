import { ReactNode } from 'react'
import './stylesheets/styles.scss'

interface Props {
  children?: ReactNode
}

const GlobalStyle = ({ children }: Props) => {
  return <>{children}</>
}

export default GlobalStyle
