import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"
import SingleCountry from "../components/SingleCountry"

const Country = () => {

  const {country} = useParams() 
  const [countryData,setCountryData] = useState([])
  
  const getCountryData = async() => {
     const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
     const result = await response.json()
         setCountryData(result)
  }

  useEffect(() => {
      getCountryData()
  }, [])
  
  
  return (
     <div className="country">
         <Link to="/">
            <button className="back-btn">Back</button>
         </Link>

          {countryData.map((element,index) => {
                return <SingleCountry element={element} key={index}/>
          })}
         
     </div>
  ) 
}

export default Country
