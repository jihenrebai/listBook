import React from 'react'


const BookList = ({ isLoading, books ,isLoggedIn,deleteBook,dispatch}) => {
  const booksList = books.map((item) => (
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
      <div>{item.title}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-primary'>
        Read
      </button>
        <button type='button' className='btn btn-danger'
          disabled={!isLoggedIn}
          onClick={() => dispatch(deleteBook(item)).unwrap()
            .then((originalPromiseResult) => {
              // handle result here
            })
            .catch((rejectedValueOrSerializedError) => {
              // handle error here
            })
          }>
        Delete
      </button>
    </div>
  </li>
  ))
    
  
  return (
      <div>
          <h2>Books List</h2>
          { isLoading ? ('Loading...') :(<ul className='list-group'>
         {booksList}
        </ul>)}
      
      </div>
  )
}

export default BookList