import Card from './Card'
import { Link } from 'react-router-dom'
import arctic from '../assets/arctic.avif'
import waterfall from '../assets/waterfall.avif'
import ocean from '../assets/ocean.avif'
import desert from '../assets/desert.avif'
import jungle from '../assets/jungle.avif'
import cave from '../assets/cave.avif'

function Cards() {
  return (
    <div className='flex flex-wrap justify-center'>
          <Link to='/'>
              
          <Card image={arctic} title='Arctic'></Card>
          </Link>
          <Link to='/ocean'>
              
              <Card image={ocean} title='Ocean'></Card>
          </Link>
          <Link to='/desert'>
              
              <Card image={desert} title='Desert'></Card>
          </Link>
          <Link to='/waterfall'>
              
              <Card image={waterfall} title='Waterfall'></Card>
              </Link>
      
              <Link to='/jungle'>
              
              <Card image={jungle} title='Jungle'></Card>
          </Link>
          <Link to='/cave'>
              
              <Card image={cave} title='Cave'></Card>
              </Link>
    </div>
  )
}

export default Cards
