"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { FaBrain, FaBlog } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";

import navStyles from './navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className={navStyles.main}>
            <Link href="/" >
                <FiHome className={navStyles.icon} size={20} color={pathname === '/' ? '#FFFFFF' : '#ADADAD'} />
            </Link>
            <Link href="/skills" className="sub-menu">
                <FaBrain size={20} color={pathname === '/skills' ? '#FFFFFF' : '#ADADAD'} />
            </Link>
            <Link href="/projects" className="sub-menu">
                <RiStackLine size={20} color={pathname === '/projects' ? '#FFFFFF' : '#ADADAD'} />
            </Link>
            <Link href="/blog" className="sub-menu">
                <FaBlog size={20} color={pathname === '/blog' ? '#FFFFFF' : '#ADADAD'} />
            </Link>
        </nav>
    )
};

export default Navbar;