import React, { useRef } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { insertBook } from '../Store/bookSlice'
const AddForm = () => {
  const {isLoggedIn}=useSelector((state)=>state.auth)
  //refs 
  const title = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data= {
      title: title.current.value,
      description: description.current.value,
      price: price.current.value
     
    }
    console.log(data)
    dispatch(insertBook(data))
   
  }
  return (
    <div>   <div className='row'>
    <div className='col-6 offset-3 mt-3'>
      <h2>Insert Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' className='form-control' id='title' required  ref={title}/>
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input type='number' className='form-control' id='price' required ref={price} />
        </div>
        <div className='form-group'>
          <label htmlFor='Description'>Description</label>
          <textarea
            className='form-control'
            id='Description'
            rows='3'
            required
            ref={description}></textarea>
        </div>
        <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
          Submit
        </button>
      </form>
    </div>
  </div></div>
  )
}

export default AddForm