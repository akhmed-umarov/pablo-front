import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleNavbar } from '@/store/slice/modals.slice';
import { motion } from "framer-motion"
import "./navbar-icon.css";

const NavbarIcon = () => {
  const dispatch = useAppDispatch();
  const position = useAppSelector(state => state.modals.navbar)

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div className={`switch ${position ? 'true' : ''}`}  onClick={() => dispatch(toggleNavbar())}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

export default NavbarIcon;