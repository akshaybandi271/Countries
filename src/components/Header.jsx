import "./components.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import {faSun} from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from "react"

const Header = () => {

     // Get the default Theme of desktop 
   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme,setTheme] = useState(defaultDark ? "dark" : "light")

   const handleThemeChange = () => {
     setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
   }

   useEffect(() => {
   
     document.documentElement.setAttribute("color-scheme",theme)

   }, [theme])
   


  return (
       <div className="header">
            <h2>
                 Where in the world?
            </h2>

            <button className="theme-switch-btn" onClick={handleThemeChange}>
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="icon"/>
                 {theme === "dark" ? "light" : "dark"} Mode
            </button>
       </div>
  )
}

export default Header
