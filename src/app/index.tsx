import {FC, lazy, Suspense} from 'react'

import './index.css'
import {FullScreenLoading} from 'src/shared/ui'

const HomePage = lazy(() => import('../pages/Home'))

const App: FC = () => {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <HomePage />
    </Suspense>
  )
}

export default App
