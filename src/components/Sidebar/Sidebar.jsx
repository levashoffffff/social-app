import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <ul className={style["sidebar-menu"]}>
                <li className="sidebar-menu__item">
                    <NavLink to="/profile" className={({isActive}) => isActive ? style.active : style['color_link']}>Profile</NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/messages" className={({isActive}) => isActive ? style.active : style['color_link']}>Messages</NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/users" className={({isActive}) => isActive ? style.active : style['color_link']}>Users</NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/news" className={({isActive}) => isActive ? style.active : style['color_link']}>News</NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/music" className={({isActive}) => isActive ? style.active : style['color_link']}>Music</NavLink>
                </li>
                <li className="sidebar-menu__item">
                    <NavLink to="/settings" className={({isActive}) => isActive ? style.active : style['color_link']}>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;