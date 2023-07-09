import { useAppSelector , useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slice/auth.slice';
import { Button } from '@chakra-ui/react';
import styled from './user-info.module.scss'

const UserInfo = () => {
    const user = useAppSelector(state=>state.auth.user)
    const dispatch = useAppDispatch()
    const logoutUser = ()=>{ 
        dispatch(logout())
    }

    return (
        <div className={styled.user_block}>
            <p>Ваша почта:</p>
            <h3>{user.email}</h3>
            <Button onClick={logoutUser}>
                Выйти
            </Button>
        </div>
    );
};

export default UserInfo;