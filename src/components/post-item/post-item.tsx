import { Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IPost } from "@/types/IPost";
import React from 'react';

type Props = {
    post: IPost
}

const PostItem = ({ post }: Props) => {
    return (
        <Link to={`/post/${post.id}`}>
            <Tooltip label={`Переход на пост под номером ${post.id}`}>
            <div className='bg-slate-200 flex flex-col w-90vw my-2 rounded-b-lg rounded-t-sm'>
                <h1 className='bg-blue-300 rounded-t-sm text-center'>{post.title.slice(0, 30)} {post.title.length > 30 ? '...' : ''}</h1>
                <p className=' text-justify pt-2'>{post.body.slice(0, 90)} {post.body.length > 90 ? '...' : ''} </p>
            </div>
            </Tooltip>
        </Link>
    );
};

export default PostItem;