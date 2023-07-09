import { motion as m } from 'framer-motion';
import styled from './navbar.module.scss';
import { closeEvery } from '@/store/slice/modals.slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import UserInfo from "@/components/user-info/user-info";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const position = useAppSelector(state => state.modals.navbar);
  const dispatch = useAppDispatch()

  useEffect(()=>{ 
    dispatch(closeEvery())
  }, [])
  
  return (
    <m.nav
      className={styled.navbar}
      drag="x"
      dragConstraints={{       
        left: 0,
        right: 0
      }}
      dragElastic={0.3}
      onDragEnd={(event, info) => {
        if (info.offset.x > 200) {
          dispatch(closeEvery())
        }
      }}
      initial={false}
      variants={{
        opened: {
          right: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
        closed: {
          right: "-100vw"
        }
      }}
      animate={position ? "opened" : "closed"}
      onUpdate={(latest: any) => {
        if (latest.x < 0) {
          latest.x = 0
        }
      }}
    >
      <UserInfo/>
        {children}
    </m.nav>
  );
};

export default Navbar;