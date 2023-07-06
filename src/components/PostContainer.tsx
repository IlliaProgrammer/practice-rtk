import React from 'react';
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
    const {data: posts, isLoading, error} = postApi.useFetchAllPostsQuery(100)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost] = postApi.useUpdatePostMutation()
    const [deletePost] = postApi.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({
            title, 
            body:title,
        } as IPost)
    }
    
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Create a new post!</button>
            {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} post={post}/>)}
        </div>
    );
};

export default PostContainer;