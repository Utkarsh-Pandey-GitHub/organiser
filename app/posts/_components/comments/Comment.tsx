import React from 'react'
import CommentList from './CommentList'
import RepliesList from './RepliesList'
import { ThumbsUp } from 'lucide-react'

function Comment({ replies = [1],reply=false }: { replies?: any[],reply?:boolean }) {
    const [liked, setLiked] = React.useState(false);
  function handleLike() {
    setLiked(prev => !liked);
  }
    return (
        <div className='border-b shadow-sm bg-opacity-5 bg-slate-400'>
            <div className="p-3">

                <div className="flex gap-3 items-center">
                    <img src="https://tweakindia.com/wp-content/uploads/2023/05/ross-1440x677.jpg" className="object-cover w-12 h-12 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                    <h3 className="font-bold text-gray-700">
                        Ross Geller <br />
                        <span className="text-sm text-gray-400 font-normal">@gellerthepaleantologist</span>
                    </h3>
                </div>
                <p className="text-gray-600 mt-2">this is sample commnent Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti eius pariatur quaerat animi consequatur, est neque, tenetur ducimus veritatis officia asperiores, nulla eligendi labore. In iste, dignissimos ea adipisci impedit nemo accusamus asperiores velit, reiciendis itaque tempore numquam cumque autem debitis assumenda molestias officia a ad aliquam nulla fugiat.  </p>
                <div className='flex gap-1 text-slate-400 '>

                <button className="text-right text-blue-500">
                <ThumbsUp
              className="w-5 h-5 mr-1 "
              onClick={handleLike}
              fill={liked ? 'blue' : 'none'}
              stroke={liked ? 'blue' : 'currentColor'}
            />
                    </button>|
                <button className="text-right text-blue-500">reply</button>
                {!reply&&<>|</>}
                {!reply&&<button className="text-right text-blue-500">see replies</button>}
                </div>
            </div>
            <div className='ml-10'>
                
                {replies.length > 0 && <RepliesList />}
            </div>
            
        </div>
    )
}

export default Comment
