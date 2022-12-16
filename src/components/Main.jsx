import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import regions from "../regions"
import CountryComponent from "./Card"
import "./components.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Main = ({countriesData}) => {


  const [selectedRegion,setSelectedRegion] = useState(null)
  const [regionCountries,setRegionCountries] = useState([])


  
  const handleSearch = (e) => {
        const searchedCountries =  countriesData.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
          setRegionCountries(searchedCountries)
  }


  const getRegion = (region) => {
     
      region.toLowerCase() !== "all" ? setSelectedRegion(region) : setRegionCountries([])
  }



  const getSelectedRegionData = async() => {

    try {
          const response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
          const result = await response.json()
            setRegionCountries(result)
    }

    catch (error){
      console.log(error)
    }

  }


  useEffect(() => {

    if(selectedRegion){
        getSelectedRegionData()
    }

  },[selectedRegion])


  return (

        <div className="main">
            <section className="search-section">
               <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                      <input type="text" className="search-input" placeholder="Search for a country" onChange={(e) => {handleSearch(e)}}/>
               </div>
               

                 <select className="select" onChange={(e) => getRegion(e.target.value)}>

                      <option value="none" selected disabled hidden>Filter by Region</option>

                      {regions.map((region,index) => {
                          return  <option key={index}  className="option">{region}</option>
                      })}
                      
                  </select>
            </section>

            <section className="countries-container">

                    {  regionCountries.length  ? (

                          regionCountries.map((country,index ) => {
                          return <Link to={`/${country.name.common}`} className="link" ><CountryComponent country={country} key={index}/></Link> 
                        }) )  :  (
                        
                          countriesData.map((country,index )=> {
                         return  <Link to={`/${country.name.common}`} className="link" ><CountryComponent country={country} key={index}/></Link> })
                        )
                      }
          
            </section>
        </div>
  )
}

export default Main
