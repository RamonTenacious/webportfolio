import { FaAws, FaCss3Alt, FaFigma, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript} from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";

export const EXPERTISES_OPTIONS = [
    {
        title: "Frontend",
        content: "React, Next, Javascript, HTML, CSS",
        icons: [
            FaHtml5,
            FaCss3Alt,
            IoLogoJavascript,
            FaReact,
            RiNextjsFill,
        ]
    },
    {
        title: "Backend",
        content: "Python, Django",
        icons: [
            FaPython,
            SiDjango,
        ]
    },
    {
        title: "Others",
        content: "AWS, Figma",
        icons: [
            FaAws,
            FaFigma
        ]
    }
]