import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
  const bookmark= useLoaderData()
  return (
    <div className='show'>
      <h1>{bookmark.title}</h1>
      <h1>{bookmark.url}</h1>
    
      </div>
  )
}

export default Show