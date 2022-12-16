import { useState,useEffect } from "react"
import Header from "../components/Header"
import Main from "../components/Main"

const Home = () => {

  const [countriesData,setCountriesData] = useState([])

 const getCountriesData = async() => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const result = await response.json()
       setCountriesData(result)
 }

  useEffect(()=> {
      getCountriesData()
  },[])

  return (
     <div>
         <Header/>
          <Main countriesData={countriesData} setCountriesData={setCountriesData}/>
     </div>
  )
}

export default Home

