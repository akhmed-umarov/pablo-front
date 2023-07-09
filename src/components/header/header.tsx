import NavbarIcon from "../navbar-icon/navbar-icon"
import styled from './header.module.scss'
import { Link } from "react-router-dom";
import LoggoBack from '@/assets/back.svg'

type Props = {
    navbarMode?: boolean
    backMode?: boolean
    backLink?: string
    titlePage: string
}

export const Header = ({ navbarMode = false, titlePage, backMode = false, backLink = 'posts' }: Props) => {
    return (
        <header className={styled.header}>
            <div className={styled.header_contain}>
                <div className={`${backMode ? '' : 'hidden'}`}>
                    <div className="hover:scale-150 duration-300">
                        <Link to={`/${backLink}`}>
                            <img src={LoggoBack} alt={'go back'} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-md text-white">
                {titlePage == 'Начало программирования на Python' ? 'Программирование Python' : titlePage}
            </div>
            <div className={`${navbarMode ? '' : 'opacity-0 w-4'}`}>
                <NavbarIcon />
            </div>
        </header>
    )
}