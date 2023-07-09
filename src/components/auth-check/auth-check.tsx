import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { checkAuth } from "@/store/slice/auth.slice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
export default function AuthCheck({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const user = useAppSelector(store => store.auth.user)
  const isAuth = useAppSelector(store => store.auth.isAuth)
  

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
      user.isActivated === false ? navigate('/actived') : null
    } else { 
        navigate('/')
    }
  }, [isAuth])

  return (
    <>
      {children}
    </>
  )
}
