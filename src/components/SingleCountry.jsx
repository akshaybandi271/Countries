import "./components.css"


const SingleCountry = ({element}) => { 

      const {name,population,region,subregion,capital,tld,currencies,borders,flags,languages} = element

  return (
    
        <div className="country-container flex">
              <img src={flags.png} alt={`flag of ${name.common}`} />

              <div className="country-desc">
                    <h1>{name.common}</h1>
                     <div className="flex">
                        <div>
                              <p>Native Name: <span className="country-span">{name.common}</span></p>
                              <p>Population: <span className="country-span">{population}</span></p>
                              <p>Region: <span className="country-span">{region}</span></p>
                              <p>Sub Region: <span className="country-span">{subregion}</span></p>
                              <p>Capital: <span className="country-span">{capital[0]}</span></p>
                         </div>

                         <div>
                              <p>Top Level Domain: <span className="country-span">{tld[0]}</span></p>
                              <p>Currencies: <span className="country-span">{currencies[0]?.code}</span></p>
                              <p>Languages: <span className="country-span">{Object.values(languages)}</span></p>
                         </div>
                     </div>
                    <p>Border Countries: {borders?.map((coun) => <div className="border-countries">{coun}</div>)}</p>
              </div>

        </div>
  
  )
}

export default SingleCountry
