import Link from "next/link"

const AboutTeam = () => {
  return (
    <div className="text-center">
          <h1 className="blue">About Team</h1>
          <ul>
              <li>
                  <Link href={"/"}>Go to Home Page</Link>
              </li>
          </ul>
    </div>
  )
}

export default AboutTeam
