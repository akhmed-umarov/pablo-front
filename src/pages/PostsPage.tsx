import UsersFilter from "@/components/users-filter/users-filter";
import AuthCheck from "@/components/auth-check/auth-check"
import MySpinner from "@/components/my-spinner/my-spinner";
import PostItem from "@/components/post-item/post-item";
import { Header } from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { IPost } from "@/types/IPost";

export default function PostsPage() {

    const [loadingPosts, setLoadingPosts] = useState<boolean>(false)
    const [posts, setPosts] = useState<IPost[]>([])
    const selectUser = async (idUser: number | string) => {
        fetchPosts(`http://localhost:8080/api/posts/${idUser}`)
    }
    const fetchPosts = async (url: string) => {
        setLoadingPosts(true)
        try {
            const res = await fetch(url)
            const posts = await res.json()
            setPosts(posts)
            setLoadingPosts(false)
        } catch (err) {
            console.log(err);
            setLoadingPosts(false)
        }
    }
    useEffect(() => {
        fetchPosts("http://localhost:8080/api/posts")
    }, [])

    return (
        <AuthCheck>
            <Navbar>
                <nav className="flex flex-col w-full h-full justify-center items-center">
                    <div>
                        <UsersFilter selectUser={(id) => { selectUser(id) }} />
                    </div>
                </nav>
            </Navbar>
            <Header navbarMode={true} titlePage="Все посты" />
            {loadingPosts ? <div className="w-100vw h-100vh"><MySpinner /></div> :
                <div className="flex justify-center items-center bg-white">
                    <div className="mt-9vh">
                        {posts.map((post) => {
                            return (
                                <PostItem key={post.id} post={post} />
                            )
                        })}
                    </div>
                </div>
            }
        </AuthCheck>
    )
}
