import AuthCheck from "@/components/auth-check/auth-check"
import MySpinner from '@/components/my-spinner/my-spinner';
import { useAppSelector } from "@/store/hooks"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { IPost } from '@/types/IPost';
import { IUser } from "@/types/IUser";

interface IPostInfo { 
    post: IPost, 
    user: IUser
}

const PostPage = () => {

    let { id } = useParams();

    const user = useAppSelector(store => store.auth.user)
    const [loadingPost, setLoadingPost] = useState<boolean>(false)
    const [postInfo, setPostInfo] = useState<IPostInfo>()


    const fetchPost = async (url: string) => {
        setLoadingPost(true)
        try {
            const res = await fetch(url)
            const post = await res.json()
            setPostInfo(post)
            setLoadingPost(false)
        } catch (err) {
            console.log(err);
            setLoadingPost(false)
        }
    }

    useEffect(() => {
        fetchPost(`http://localhost:8080/api/post/${id}`)
    }, [])

    return (
        <AuthCheck>
            {loadingPost ? <MySpinner /> :
                <div>
                    <div>
                        <p>
                            {postInfo?.post.body}
                        </p>
                    </div>
                    <h1>{user.email}</h1>
                </div>
            }

        </AuthCheck>
    );
};

export default PostPage;