"use client"


import Link from "next/link"
import { useRouter } from 'next/navigation'

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        <li>
          <Link href={"/"}>Go to Home Page</Link>
        </li>
      </ul>
     
      
      <div>
        <button onClick={()=>router.push("/")}>Go to Home Page</button>
      </div>
    </div>
  )
}

export default Contact
