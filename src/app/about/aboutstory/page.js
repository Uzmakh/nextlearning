import Link from "next/link"

const AboutStory = () => {
  return (
    <div className="text-center">
          <h1 className="blue">About Story</h1>
          <ul>
              <li>
                  <Link href={"/"}>Go to Home Page</Link>
              </li>
          </ul>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium repellendus libero sint porro molestias earum! Fuga cupiditate quos qui numquam animi quia aliquid amet, corrupti voluptatibus quis ea itaque.</p>
    </div>
  )
}

export default AboutStory
