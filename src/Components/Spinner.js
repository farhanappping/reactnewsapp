import React from 'react'
import loading from './loading.gif'
import tree from './tree.jpg'

const Spinner =()=> {
    return (
      <div className='text-center' >
        <img src={loading} alt="loading"style={{height:'60px'}} />
        <img src={tree} alt="loading"style={{height:'60px'}} />

      </div>
    )
  }


export default Spinner
