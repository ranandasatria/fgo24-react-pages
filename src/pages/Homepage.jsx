import Navbar from '../components/Navbar'
import BookList from '../components/BookList';

function Homepage() {
  return(
    <>
    <div className='flex flex-col justify-start h-screen'>
    <Navbar/>
    <div>
    </div>
    <BookList />
    </div>
    </>
  )
}

export default Homepage