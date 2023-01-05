import { useRef, useState } from 'react'

import { Nav, Hamburguer, Menu, MenuLink, Logo } from './styles'

export function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Nav>
            <Logo to="home" spy={true} smooth={true} offset={50} duration={500}>
                Port<span>fólio</span>
            </Logo>
            <Hamburguer onClick={() => setOpen(!open)}>
                <span className="span-1" />
                <span className="span-2" />
                <span className="span-3" />
            </Hamburguer>
            <Menu open={open}>
                <MenuLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Home
                </MenuLink>
                <MenuLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Sobre
                </MenuLink>
                <MenuLink
                    to="cardsGithub"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Repositório
                </MenuLink>
                <MenuLink
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Habilidades
                </MenuLink>
                <MenuLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Contate-me
                </MenuLink>
            </Menu>
        </Nav>
    )
}
