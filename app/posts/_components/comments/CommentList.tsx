import React from 'react'
import Comment from './Comment'

function CommentList() {
    return (
        <div className='border-t border-slate-400'>
            <div className='text-gray-500 ml-4'>9 comments</div>
            <Comment replies={[]}/>
            <Comment replies={[]}/>
            <Comment />
            <Comment replies={[]}/>
            <div className="p-3">
                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3  placeholder-gray-400 text-black font-light focus:outline-none focus:bg-white" name="body" placeholder="Comment" required />
            </div>
            <div className="w-full flex justify-end px-3 my-3">
                <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 " value='Post Comment' />
            </div>
        </div>
    )
}

export default CommentList
