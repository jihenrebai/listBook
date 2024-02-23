import React, {Fragment, useEffect } from 'react'
import BookInfo from './BookInfo'
import BookList from './BookList'
import { useDispatch,useSelector } from 'react-redux'
import { getBooks,deleteBook } from '../Store/bookSlice'
const BookContainer = () => {
  const { isLoading, books } = useSelector((state) => state.books)
  const {isLoggedIn} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    },[dispatch])
  return (
      <div>BookContainer
      <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
            <BookList
              isLoading={isLoading}
              books={books}
              isLoggedIn={isLoggedIn}
              deleteBook={deleteBook}
              dispatch={dispatch}
            />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
      </div>
  )
}

export default BookContainer