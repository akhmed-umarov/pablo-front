import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import AuthCheck from "@/components/auth-check/auth-check"

const PostPage = () => {

    const user = useAppSelector(store => store.auth.user)
    const dispatch = useAppDispatch()

    return (
        <AuthCheck>
        <div>
            1 post
            <h1>{user.email}</h1>
        </div>
        </AuthCheck>
    );
};

export default PostPage;