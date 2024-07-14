import { createContext, useContext, useEffect, useState } from "react";


const PostContext =createContext({} as any);

export const usePosts = () => {
  return useContext(PostContext);
}


export function PostsProvider({children}: {children: React.ReactNode}) {
    const [posts, setPosts] = useState([] as any);
    useEffect(() => {
        console.log(posts)
    }, [posts]);
  return (
    <PostContext.Provider value={{
        posts,
        setPosts
    }}>
      {children}
    </PostContext.Provider>
  );
}