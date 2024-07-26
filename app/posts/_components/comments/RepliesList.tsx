import React from 'react'
import Comment from './Comment'

function RepliesList() {
  return (
    <div>
      <Comment replies={[]} reply={true}/>
      <div className='px-7 text-black opacity-45'>|</div>
      <Comment replies={[]} reply={true}/>
      <div className='px-7 text-black opacity-45'>|</div>
      <Comment replies={[]} reply={true}/>
      <div className='px-7 text-black opacity-45'>|</div>
    </div>
  )
}

export default RepliesList
