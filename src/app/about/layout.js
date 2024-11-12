"use client";

import { usePathname } from "next/navigation"
import "./about.css"
const layout = ({ children }) => {
    const currentPathname = usePathname();
    console.log("Current Path Name :", currentPathname);

    // optimized way of creating multiple conditions
    const hideLayoutForPaths = ["/about/aboutstory"];

    const shouldHideLayout = hideLayoutForPaths.includes(currentPathname);
  return (
      <div className="text-center">
          {
              !shouldHideLayout && (
                  <>
                      About Layout
                      <h1 className="blue">Common Layout</h1>
                  </>
              )
          }
        
          {children}
    </div>
  )
}

export default layout
