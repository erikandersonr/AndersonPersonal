import Link from "next/link";
import TypingText from "./components/TypingText";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <div className="flex justify-center items-center flex-col pt-8">
        <TypingText text="Erik Anderson" className="font-medium" />
        <TypingText text="ander7er@dukes.jmu.edu" className="text-sm"/>
        <div className="grid grid-cols-2 gap-4">
        </div>
      </div>
      <div className="mt-8 text-sm">
        <h2 className="font-medium">About Me</h2>
        <p>I'm a Finance major at James Madison University. I'm passionate about building companies that solve real-world problems.</p>
        <p className="mt-1">I'm passionate about product development and UX design.</p>
        <p className="mt-1">I'm from the DC area and grew up with a passion for entrepreneurship and space.</p>
      </div>
      <div className="mt-8 text-sm">
        <h2 className="font-medium">Projects</h2>
        <p>I'm the founder of {" "}
          <span className="font-medium underline cursor-pointer">
            <Link href="https://venturoai.com/">
              Venturo
            </Link>
          </span>, a startup that is building a platform for the next generation of market research for Venture Capital.</p>
        <p className="mt-1">I gained customer experience skills at Alan Health, where I was an early employee and got first-hand experience with the challenges of launching a new product in a crowded market.</p>
        <p className="mt-1">I'm a self-taught developer and began learning to code to build out my ideas.</p>
      </div>
      <div className="mt-8 text-sm">
        <h2 className="font-medium">Personal Interests</h2>
        <p>I previously played rugby and lacrosse in high school and currently row on the club team at JMU.</p>
        <p className="mt-1">As a kid, I was fascinated by space and dreamed of going to Mars. I'm also a big fan of the Washington Commanders.</p>
      </div>
    </div>
  )
}
