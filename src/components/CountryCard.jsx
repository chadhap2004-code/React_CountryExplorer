function CountryCard({country , onClick}){
    return(
          <div className="country-card" onClick={() => onClick(country)}>
      <img
        className="country-flag"
        src={country.flags.svg}
        alt={country.name.common}
      />
      <p className="country-name">{country.name.common}</p>
      <p className="country-region">{country.region}</p>
    </div>
    );
}
export default CountryCard;
