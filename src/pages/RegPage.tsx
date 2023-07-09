import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, registration } from "@/store/slice/auth.slice";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


export default function RegPage() {

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(store => store.auth.isLoading)
  const isAuth = useAppSelector(store => store.auth.isAuth)
  const isError = useAppSelector(store => store.auth.isError)
  const errorMessage = useAppSelector(store => store.auth.errorMessage)
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

  useEffect(() => {
    if (isAuth) {
        navigate('/home')
    }
  }, [isAuth])

  if (!isAuth) {
    return (
      <div className="flex w-100vw h-93vh justify-center items-center bg-white">
        <div className="flex max-w-max w-1/2 flex-col">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">Авторизация</h1>
          </div>
          <span className="h-20 flex justify-center items-center">
           <p className={`text-xs text-red-600 ${isError ? 'opacity-100' : 'opacity-0'}` } >{errorMessage}</p>
          </span>
          <div>
          <Input
            value={email}
            disabled={isLoading}
            onChange={e => setEmail(e.target.value)}
            pr='4.5rem'
            type="text"
            placeholder='Email'
            className="mb-6"
            id="email"
          />
          </div>
          <InputGroup size='md' className="mb-6">
            <Input
              disabled={isLoading}
              value={password}
              onChange={e => setPassword(e.target.value)}
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
              placeholder='Пароль'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='xs' onClick={handleClick}>
                {showPassword ? 'Скрыть' : 'Показать'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button className="mb-5" colorScheme='blue' variant='outline' isLoading={isLoading} onClick={() => dispatch(login({ email, password }))}>
            Вход
          </Button>
          <Button className="mb-5" colorScheme='blue' variant='outline' isLoading={isLoading} onClick={() => dispatch(registration({ email, password }))}>
            Регистрация
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div></div>
  )
}
