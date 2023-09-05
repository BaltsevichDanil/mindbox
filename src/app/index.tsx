import {FC, lazy} from 'react'
import './index.css'

const HomePage = lazy(() => import("../pages/home"))

const App: FC = () => {
  return (
    <HomePage />
  )
}

export default App
