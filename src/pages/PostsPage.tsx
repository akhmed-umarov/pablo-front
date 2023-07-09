import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import AuthCheck from "@/components/auth-check/auth-check"

export default function PostsPage() {
    
    const user = useAppSelector(store => store.auth.user)
    const dispatch = useAppDispatch()

    return (
        <AuthCheck>
            <div className="w-100vw h-100vh flex justify-center items-center bg-white">
                    vnogo posts
            <h1>{user.email}</h1>

            </div>
        </AuthCheck>
    )
}
