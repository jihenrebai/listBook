import React,{Fragment} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert';
import {logOut} from '../Store/authSlice'
const Header = () => {
  const { error } = useSelector((state) => state.books)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch=useDispatch()
  return (
    <Fragment>
      {
        error && (
          <Alert variant='danger'>
           {error}
         
        </Alert>
        )
    }
      <div>
    <nav className='navbar navbar-dark bg-dark'>
    <span className='navbar-brand mb-0 h1'>My Books</span>

    <button className='btn btn-outline-primary' type='submit' onClick={()=>dispatch(logOut())}>
            {isLoggedIn ? 'log Out' :'log In'
            }
    </button>
    </nav></div>
   </Fragment>
  )
}

export default Header