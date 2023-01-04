import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Container = styled.div`
    background: #fff;
`

export const Home = styled.section`
    display: flex;
    height: 100vh;
    /* width: 100vw; */
    min-height: 500px;

    .max-width {
        margin: auto 0 auto 60px;
    }

    .home-content .text-1 {
        font: 27px monospace, sans-serif;
        color: #191927;
    }
    .home-content .text-2 {
        font: 600 75px monospace, sans-serif;
        color: #191927;

        margin-left: -3px;
    }
    .home-content .text-3 {
        font: 40px monospace, sans-serif;
        color: #191927;

        margin: 5px 0;
    }
    .home-content .text-3 span {
        color: #5aa9e6;
        font: 700 40px monospace, sans-serif;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 20px monospace, sans-serif;
        }
        .home-content .text-2 {
            font: 700 55px monospace, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 30px monospace, sans-serif;
            margin: 5px 0;
        }
        .home-content .text-3 span {
            color: #5aa9e6;
            font: 700 30px monospace, sans-serif;
        }
    }

    @media (max-width: 576px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 15px monospace, sans-serif;
        }
        .home-content .text-2 {
            font: 700 40px monospace, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 25px monospace, sans-serif;
            margin: 5px 0;
        }
        .home-content .text-3 span {
            color: #5aa9e6;
            font: 700 30px monospace, sans-serif;
        }
    }
`

export const Button = styled.div`
    .typing-demo {
        width: 22ch;
        animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 3em;
        color: #191927;
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }

    @media (max-width: 768px) {
        padding: 10px 25px;
        font: 500 10px monospace;
    }

    @media (max-width: 576px) {
        padding: 8px 20px;
        font: 500 8px monospace;
    }

    @media (max-width: 768px) {
        .typing-demo {
            width: 18ch;
        }
    }
`
export const About = styled.section`
    padding: 100px;
    font-family: monospace, sans-serif;

    .about-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 20px;
        position: relative;
        color: #191927;
    }

    .title::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 180px;
        height: 3px;
        background: #191927;
        transform: translateX(-50%);
    }

    .title::after {
        content: 'Quem sou eu';
        position: absolute;
        bottom: -12px;
        left: 50%;
        font-size: 20px;
        background: #fff;
        color: #5aa9e6;
        padding: 5px;
        transform: translateX(-50%);
    }

    .about-content .left {
        width: 45%;
    }

    .about-content .right {
        width: 55%;
    }

    .about-content .right .text {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 10px;
        color: #191927;
    }

    .about-content .right .text span {
        color: #5aa9e6;
    }

    .about-content .right p {
        text-align: justify;
        color: #191927;
        margin-bottom: 20px;
    }

    .about-content .right a {
        display: inline-block;
        /* background: #191927; */
        background: linear-gradient(45deg, #5aa9e6, #191927);
        animation: hue-rotate 2s linear infinite alternate;
        color: #f9f9f9;
        font-size: 20px;
        font-weight: 500;
        padding: 12px 32px;
        margin-top: 20px;
        /* border-radius: 2px; */
        border: 1px solid #191927;
        transition: all 0.3s ease;
        box-sizing: border-box;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    }

    @keyframes hue-rotate {
        to {
            filter: hue-rotate(45deg);
        }
    }

    .about-content .right a:hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        color: #191927;
        background: none;
        /* box-shadow: none; */
    }

    .about-content .column .right {
        flex: 100%;
    }

    .about-content .left img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 6px;
    }

    .about-content .column {
        width: 50%;
    }

    .about-content .column .left {
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }

    @media (max-width: 768px) {
        .about-content .column {
            width: 50%;
        }

        .about-content .left {
            display: flex;
            justify-content: center;
            margin: 0 auto 60px;
        }

        .about-content .right {
            flex: 100%;
        }
    }

    @media (max-width: 1104px) {
        .about-content .left img {
            width: 250px;
            height: 250px;
        }
    }
`

export const GitHubContainer = styled.div`
    font-family: monospace, sans-serif;

    .title {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 20px;
        position: relative;
        color: #191927;
    }

    .title::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 180px;
        height: 3px;
        background: #191927;
        transform: translateX(-50%);
    }

    .title::after {
        content: 'Repositories';
        position: absolute;
        bottom: -12px;
        left: 50%;
        font-size: 20px;
        background: #fff;
        color: #5aa9e6;
        padding: 5px;
        transform: translateX(-50%);
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 10px;
    padding: 0 100px;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 250px;
        max-width: 300px;
        height: 120px;

        border-radius: 6px;
        border-color: ${lighten(0.2, '#191927')};
        border-collapse: separate;
        border-width: 1px;
        border-style: solid;
        background: ${lighten(0.3, '#5aa9e6')};

        padding: 1rem 0.8rem;
        /* padding: 1rem; */
    }

    .titleCard {
        font: 18px monospace, sans-serif;
        color: ${lighten(0.1, '#191927')};

        text-overflow: ellipsis;
        overflow: hidden;
    }

    .description {
        font: 15px monospace, sans-serif;
        color: ${lighten(0.2, '#191927')};
        text-align: left;
        margin-top: 1.2rem;

        text-overflow: ellipsis;
        overflow: hidden;
    }

    @media (max-width: 600px) {
        justify-content: center;
        align-items: center;

        .card {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 150px;
            max-width: 150px;
            height: 80px;
            max-height: auto;
        }

        .titleCard {
            font: 15px monospace, sans-serif;
        }

        .description {
            display: none;
        }
    }
`

export const CardsGithub = styled.section`
    margin: auto 60px auto 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    font-family: monospace, sans-serif;
    gap: 10px;

    .container {
        /* width: 1000px; */
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .container .card {
        position: relative;
        cursor: pointer;
    }

    .container .card .face {
        width: 250px;
        height: 150px;
        transition: 0.5s;
    }

    .container .card .face.face1 {
        position: relative;
        background: #191927;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(75px);
    }

    .container .card:hover .face.face1 {
        background: #5aa9e6;
        transform: translateY(0);
    }

    .container .card .face.face1 .content {
        opacity: 0.2;
        transition: 0.5s;
    }

    .container .card:hover .face.face1 .content {
        opacity: 1;
    }

    .container .card .face.face1 .content h3 {
        margin: 10px 0 0;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1em;
    }

    .container .card .face.face2 {
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-overflow: ellipsis;
        box-sizing: border-box;
        box-shadow: 0 10px 20px #191927;
        transform: translateY(-75px);
    }

    .container .card:hover .face.face2 {
        transform: translateY(0);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    }

    .container .card .face.face2 .content p {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
    }

    .container .card .face.face2 .content a {
        margin: 15px 0 0;
        display: inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #191927;
        padding: 5px;
        border: 1px solid #191927;
    }

    .container .card .face.face2 .content a:hover {
        background: #191927;
        color: #fff;
    }
`

export const CardHover = styled.div`
    margin: auto 60px auto 60px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font: monospace, sans-serif;

    .container {
        width: 1000px;
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .container .card {
        position: relative;
        cursor: pointer;
    }

    .container .card .face {
        width: 300px;
        height: 200px;
        transition: 0.5s;
    }

    .container .card .face.face1 {
        position: relative;
        background: #191927;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(100px);
    }

    .container .card:hover .face.face1 {
        background: #5aa9e6;
        transform: translateY(0);
    }

    .container .card .face.face1 .content {
        opacity: 0.2;
        transition: 0.5s;
    }

    .container .card:hover .face.face1 .content {
        opacity: 1;
    }

    .container .card .face.face1 .content img {
        max-width: 100px;
    }

    .container .card .face.face1 .content h3 {
        margin: 10px 0 0;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5em;
    }

    .container .card .face.face2 {
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        transform: translateY(-100px);
    }

    .container .card:hover .face.face2 {
        transform: translateY(0);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
    }

    .container .card .face.face2 .content p {
        margin: 0;
        padding: 0;
    }

    .container .card .face.face2 .content a {
        margin: 15px 0 0;
        display: inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #191927;
        padding: 5px;
        border: 1px solid #191927;
    }

    .container .card .face.face2 .content a:hover {
        background: #191927;
        color: #fff;
    }
`

export const Skills = styled.div`
    font-family: monospace, sans-serif;

    .title {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        padding-bottom: 20px;
        position: relative;
        color: #191927;
    }

    .title::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 180px;
        height: 3px;
        background: #191927;
        transform: translateX(-50%);
    }

    .title::after {
        content: 'Minhas skills';
        position: absolute;
        bottom: -12px;
        left: 50%;
        font-size: 20px;
        background: #fff;
        color: #5aa9e6;
        padding: 5px;
        transform: translateX(-50%);
    }
`

export const Contact = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    padding: 0rem 0rem 0.2rem 0rem;

    .icon {
        font-size: 35px;
        animation: float 5s ease-in-out infinite;
    }
    .whatsapp-ri {
        color: #25d366;
        animation-delay: 1s;
    }
    .linkedin-ri {
        color: #0a66c2;
        animation-delay: 2s;
    }

    .github-ri {
        color: #333;
        animation-delay: 3s;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @media (max-width: 600px) {
        .icon {
            font-size: 25px;
        }
    }
`
export const Loader = styled.div`
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: none;
    font: 27px monospace, sans-serif;
    color: #191927;

    .circle {
        width: 100px;
        height: 100px;
        border: 10px solid ${darken(0.2, '#5aa9e6')};
        border-top-color: ${lighten(0.2, '#5aa9e6')};
        border-radius: 50%;
        animation: spin 1.5s linear infinite;
        margin-bottom: 50px;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`
