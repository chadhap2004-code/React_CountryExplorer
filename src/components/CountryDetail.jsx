function CountryDetail({country , onBack}){
   return( <div className="detail-card">
        <button className="back-btn" onClick={onBack}>Back</button>
        <div className="detail-hero">
            <img className="detail-flag"
            src={country.flags.svg} alt={country.name.common} />
            <h2 className="detail-name">{country.name.common}</h2>
            
        </div>
        <div className="detail-rows">
            <div className="detail-row">
                <span className="detail-label">Country Code</span>
                <span className="detail-value">{country.region}</span>
            </div>
        </div>
    </div>);
}
export default CountryDetail;
