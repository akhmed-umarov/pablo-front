import MySpinner from '../my-spinner/my-spinner';
import { useEffect, useState } from 'react';
import { IUser } from '@/types/IUser';
import { API_URL } from '@/http';

type Props = {
    selectUser: (idUser: number | string) => void
}

const UsersFilter = ({ selectUser }: Props) => {
    const [loadingUsers, setloadingUsers] = useState<boolean>(false)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const fetchUsers = async () => {
            setloadingUsers(true)
            try {
                const res = await fetch(`${API_URL}/users`)
                const users = await res.json()
                setUsers(users)
                setloadingUsers(false)
            } catch (err) {
                console.log(err);
                setloadingUsers(false)
            }
        }
        fetchUsers()
    }, [])
    return (
        <div>
            {loadingUsers ? <MySpinner /> :
                <div className='flex flex-col'>
                    <p onClick={() => selectUser('')} className='cursor-pointer hover:scale-110 duration-300'>Все посты</p>
                    {users.map((user) => {
                        return (
                            <p onClick={() => selectUser(user.id)} className='cursor-pointer hover:scale-110 duration-300' key={user.id}>{user.name}</p>
                        )
                    })}
                </div>
            }
        </div>
    );
};

export default UsersFilter;