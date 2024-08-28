'use client';
import Link from "next/link"

export default function Menu() {

    const scrollToSection = (id: string) => {
        let section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav>
            <ul>
                <li><Link href="" onClick={() => scrollToSection('portfolio')}>PORTFOLIO</Link></li>
                <li><img className="logo" src="logo.svg" alt="" /></li>
                <li><Link href="" onClick={() => scrollToSection('servicos')}>SERVIÇOS</Link></li>
            </ul>
        </nav>
    )   
}