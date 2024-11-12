"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <h2>Through Link</h2>
        <li>
          <Link href={"/"}>Go to Home Page</Link>
        </li>
        <li>
          <Link href={"/about/aboutteam"}>Go to About Team</Link>
        </li>
        <li>
          <Link href={"/about/aboutstory"}>Go to About Story</Link>
        </li>
      </ul>
<h2>Through useRouter Hook</h2>
     <button onClick={()=>router.push("/")}>Go to Home Page</button>
    </div>
  )
}

export default About
