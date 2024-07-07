"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { FaBrain, FaBlog } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";

import './navbar.scss';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className='navbar'>
            <Link href="/" >
                <FiHome size={20} color={pathname === '/' ? '#FFFFFF' : '#818181'} />
            </Link>
            <Link href="/skills" className="sub-menu">
                <FaBrain size={20} color={pathname === '/skills' ? '#FFFFFF' : '#818181'} />
            </Link>
            <Link href="/projects" className="sub-menu">
                <RiStackLine size={20} color={pathname === '/projects' ? '#FFFFFF' : '#818181'} />
            </Link>
            <Link href="/blog" className="sub-menu">
                <FaBlog size={20} color={pathname === '/blog' ? '#FFFFFF' : '#818181'} />
            </Link>
        </nav>
    )
};

export default Navbar;