import React, { Fragment } from 'react'

const BookInfo = () => {
  return (
      <div>
    <Fragment>
    <h2>Book Details</h2>
    <div className='alert alert-secondary' role='alert'>
      There is no book selected yet. Please select!
    </div>
   </Fragment>
  </div>
  )
}

export default BookInfo