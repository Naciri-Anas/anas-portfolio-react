import { RiReactjsFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsFill className="text-7xl text-cyan-400"></RiReactjsFill>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoHtml5 className="text-7xl text-orange-400"></IoLogoHtml5>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-red-900"></FaJava>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-300 "></IoLogoJavascript>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoNodejs className="text-7xl text-green-600"></IoLogoNodejs>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPostgresql className="text-7xl text-blue-400"></DiPostgresql>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl "></SiMysql>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFlutterFill className="text-7xl text-blue-600"></RiFlutterFill>
        </div>
        
    </div>
      
    </div>

  )
}

export default Technologies
