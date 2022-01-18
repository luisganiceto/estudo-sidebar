import styles from './styles.module.scss';

import { 
    MdOutlineDashboard,
    MdOutlineAnalytics,
    MdOutlineFlag,
    MdPeopleOutline,
    MdOutlineMessage,
    MdOutlineLogout
} from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';
import { FaReact, FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { VscDashboard } from 'react-icons/vsc';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IconProps{
    url: string;
    icon : React.SVGAttributes<SVGElement>;
    description: string;
}

export function NavBar(){
    const [nav, setNav] = useState(false);

    const NavUrl = ({url, icon, description} : IconProps) => {
        const checkWindowSize = () => {
            if(window.innerWidth <1024) setNav(!nav);
        }

        return (
            <li className={styles.li_navlink}>
                <NavLink
                    to={`${url}`}
                    onClick={() => checkWindowSize()}
                    className={({ isActive }) => (isActive ? styles.active : '')}
                >
                    {icon}
                    <span className={styles.description}>{description}</span>

                </NavLink>
            </li>
        )
    }

    return(
        <div className={`${styles.navbar_container} 
            ${nav ? styles.navbar_mobile_active : undefined}`}>   
            
            <nav className={nav ? undefined : styles.nav_small}>
                <div className={styles.logo}>
                    <VscDashboard className={styles.logo_icon}/>
                    <FaTimes 
                        className={styles.mobile_cancel_icon} 
                        onClick={() => setNav(!nav)}
                    />
                </div>

                <ul className={styles.menu_container}>
                    <span className={styles.categories}>
                        {nav ? "Pages" : <BsThreeDots />}
                    </span>
                    <NavUrl 
                        url='/'
                        description='Dashboard'
                        icon={<MdOutlineDashboard />}
                    />
                    <NavUrl 
                        url='/analytcs'
                        description='Analytcs'
                        icon={<MdOutlineAnalytics />}
                    />
                    <NavUrl 
                        url='/campaings'
                        description='Campaings'
                        icon={<MdOutlineFlag />}
                    />
                    <NavUrl 
                        url='/messages'
                        description='Messages'
                        icon={<MdOutlineMessage />}
                    />
                    <span className={`${styles.categories} ${styles.second_category}`} >
                        {nav ? "More" : <BsThreeDots />}
                    </span>
                    <NavUrl 
                        url='/other1'
                        description='Auth'
                        icon={<IoMdLogIn />}
                    />
                    <NavUrl 
                        url='/other1'
                        description='ReactJs'
                        icon={<FaReact />}
                    />
                </ul>

                <div className={styles.btn_logout}
                    onClick={() => {
                        setNav(!nav)
                    }}
                >
                    <MdOutlineLogout />
                </div>
            </nav>
        </div>
    )
}