import "./components.css"


const SingleCountry = ({element}) => {  

  return (
    
        <div className="country-container flex">
              <img src={element.flags.png} alt={`flag of ${element.name.common}`} />

              <div className="country-desc">
                    <h1>{element.name.common}</h1>
                     <div className="flex">
                        <div>
                              <p>Native Name: <span className="country-span">{element.name.common}</span></p>
                              <p>Population: <span className="country-span">{element.population}</span></p>
                              <p>Region: <span className="country-span">{element.region}</span></p>
                              <p>Sub Region: <span className="country-span">{element.subregion}</span></p>
                              <p>Capital: <span className="country-span">{element.capital[0]}</span></p>
                         </div>

                         <div>
                              <p>Top Level Domain: <span className="country-span">{element.tld[0]}</span></p>
                              <p>Currencies: <span className="country-span">currency</span></p>
                              <p>Languages: <span className="country-span">{Object.values(element.languages)}</span></p>
                         </div>
                     </div>
                    <p>Border Countries: {element.borders.map(coun => <div className="border-countries">{coun}</div>)}</p>
              </div>

        </div>
  
  )
}

export default SingleCountry
