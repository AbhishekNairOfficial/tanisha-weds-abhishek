import { LazyMotion } from "framer-motion"
import HomePage from './pages/Home/Home'
import './App.css'

function App() {
  const loadFeatures = () => import("./utils/framer/features").then(res => res.default)

  return (
    <div className='bg-bg'>
      <LazyMotion strict features={loadFeatures}>
        <HomePage />
      </LazyMotion>
    </div>
  )
}

export default App
