import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import XLogo from "@/public/X-Logo.png"
import Image from "next/image";
import TypingText from "./components/TypingText";

export default function Home() {
    const content = `Erik Anderson
ander7er@dukes.jmu.edu

About Me
I\'m a freshman Finance major at James Madison University with a strong interest in finance, algorithmic trading, and leveraging technology to solve real-world problems.
I\'m passionate about product development, quantitative analysis, and building innovative solutions that drive efficiency and create value.
I\'m from the DC area and grew up with a passion for entrepreneurship and space exploration.

Projects
I\'m the founder of Venturo, a startup that is building a platform for the next generation of market research for Venture Capital.
I also created Vercode, which is a platform for detecting plagiarism in code.
I gained customer experience skills at Alan Health, where I was an early employee and got first-hand experience with the challenges of launching a new product in a crowded market.
I\'m a self-taught developer and began learning to code to build out my ideas.

Personal Interests
I previously played rugby and lacrosse in high school and currently row on the club team at JMU.
I\'m also a big fan of the Washington Commanders.`;

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow max-w-4xl mt-8 mx-auto px-8 text-sm">
                <TypingText text={content} className="whitespace-pre-line" />
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto text-center text-sm">
                    <div className="flex justify-center items-center gap-8 underline">
                        <Link href="https://github.com/erikandersonr/" target="_blank" rel="noopener noreferrer">
                            Github
                        </Link>
                        <Link href="https://www.linkedin.com/in/erikandersonr/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </Link>
                        <Link href="https://x.com/erikandersr/" target="_blank" rel="noopener noreferrer">
                            X
                        </Link>
                        <Link href="https://venturoai.com/" target="_blank" rel="noopener noreferrer">
                            Venturo
                        </Link>
                        <Link href="https://vercode-p3xx.vercel.app/" target="_blank" rel="noopener noreferrer">
                            Vercode
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}