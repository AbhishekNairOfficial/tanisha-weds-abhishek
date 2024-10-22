import {APIProvider} from '@vis.gl/react-google-maps';

import './App.css'
import HomePage from './pages/Home/Home'

function App() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className='bg-bg'>
        <HomePage />
      </div>
    </APIProvider>
  )
}

export default App
