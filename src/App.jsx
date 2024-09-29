import arctic from './assets/arctic.avif'
import Title from './components/Title'
import './App.css'

function App() {

  return (
    <>
    <div className=' w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${arctic})` }}>
                <div className='z-00 absolute inset-0 bg-black opacity-60'></div>
<Title title='Arctic' text='The Arctic is the northernmost region of Earth, known for extreme cold, ice-covered seas, and wildlife like polar bears. It includes parts of Canada and Russia, with long winters and short summers.'></Title>
     
    </div>
    </>
  )
}

export default App
