import { forwardRef, useEffect, useRef, useState } from 'react'
import { WhatsApp, LinkedIn, GitHub } from '@mui/icons-material'

import { Navbar } from '../components/Navbar'

import {
    Container,
    Home,
    Button,
    About,
    GitHubContainer,
    Contact,
    Skills,
    CardHover,
    CardsGithub,
    Loader
} from '../styles/pages/Landing'

import MyPDF from '../assets/curriculum.pdf'

import api from '../services/api'

type UserData = {
    id: number
    name: string
    avatar_url: string
}

type Repository = {
    name: string
    description: string
    html_url: string
}

export function Landing() {
    const [userData, setUserData] = useState<UserData>()
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        api.get('/users/BrunomelloxD').then(response => {
            setUserData(response.data)
        })
    })

    useEffect(() => {
        api.get('/users/BrunomelloxD/repos').then(response => {
            setRepositories(response.data)
        })
    })

    if (!userData) {
        return (
            <Loader>
                <div className="circle" />
                <p>Loading...</p>
            </Loader>
        )
    }

    return (
        <Container>
            <Navbar />
            <Home className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Olá, meu nome é</div>
                        <div className="text-2">{userData?.name}</div>
                        <div className="text-3">
                            Eu sou desenvolvedor
                            <span> front-end</span>
                        </div>
                        <br />
                        <br />
                        <Button>
                            <div className="typing-demo">#Contrate-me</div>
                        </Button>
                    </div>
                </div>
            </Home>
            {/**
             * About
             */}
            <About className="about" id="about">
                <div className="max-width">
                    <h2 className="title">Sobre</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={userData?.avatar_url} loading="lazy" />
                        </div>
                        <div className="column right">
                            <div className="text">
                                Sou Bruno e sou desenvolvedor
                                <span> front-end</span>
                            </div>
                            <p>
                                Olá, meu nome é Bruno Mello e sou estudante
                                front-end. Tenho 24 anos e estudo Análise e
                                Desenvolvimento de sistemas pela Faculdade de
                                Tecnologia do estado de São Paulo (FATEC
                                Mococa). Sou apaixonado por tecnologia, trabalho
                                em equipe e no aprendizado. Atualmente venho em
                                busca da minha primeira vaga como desenvolvedor
                                e para isso levo principal foco de estudo:
                                React.JS, React Native, TypeScript,
                                styled-components, Node.js, Express.JS, Git,
                                GitHub, PostgreSQL e Kanban. Irei deixar um
                                download do meu curriculum para que possa
                                baixa-lo e olhar com mais calma. Obrigado pela
                                visita, espero te ver novamente por aqui!
                            </p>
                            <a href={MyPDF} download="curriculum_bruno_mello">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </About>
            {/**
             * GitHub
             */}
            <GitHubContainer className="section-1" id="cardsGithub">
                <h2 className="title">GitHub</h2>
                <CardsGithub>
                    {repositories.map(repo => {
                        return (
                            <div className="container">
                                <div className="card">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="face face1">
                                            <div className="content">
                                                <h3>{repo.name}</h3>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="face face2">
                                        <div className="content">
                                            <p>{repo.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </CardsGithub>
            </GitHubContainer>

            <br />
            <br />
            <br />
            {/* Skills */}
            <Skills id="skills">
                <h2 className="title">Habilidades</h2>
                <CardHover>
                    <div className="container">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                    <h3>Code</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>
                                        Apaixonado pela programação web e um
                                        eterno estudante das tecnologias
                                        disponíveis, tentando aplicar sempre os
                                        melhores recursos no desenvolvimento dos
                                        projetos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                                    <h3>Design</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>
                                        O design me fascina pois é algo que
                                        posso ver com meus próprios olhos,
                                        atualmente fascinado pelo front onde
                                        geralmente posso acompanhar as mudanças
                                        em tempo real.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHover>
            </Skills>
            {/**
             * Contact
             */}
            <Contact id="contact">
                <a
                    href="https://wa.me/5519997119007"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsApp className="whatsapp-ri icon" />
                </a>

                <a
                    href="https://www.linkedin.com/in/brunomello-xd/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn className="linkedin-ri icon center" />
                </a>

                <a
                    href="https://github.com/BrunomelloxD"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub className="github-ri icon" />
                </a>
            </Contact>
        </Container>
    )
}

export default forwardRef(Landing)
