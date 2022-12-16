
import "./components.css"
import "../App.css"

const CountryComponent = ({country}) => {

    const {name,capital,region,population,flags} = country


  return (
        <div className="country-card">
            <img src={flags.png} alt="" className="country-card-image"/>

            <div className="country-card-desc">
              <p className="country-name">{name.common}</p>
              <p className="country-population"><span className="country-card-span">Population</span>: {population}</p>
              <p className="country-region"><span className="country-card-span">Region</span>: {region}</p>
              <p className="country-capital"><span className="country-card-span">Capital</span>: {capital}</p>
            </div>
        </div>
  )
}

export default CountryComponent
