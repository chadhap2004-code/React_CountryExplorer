function SearchBar({query , onChange}){
    return(
        <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input type="text"
            className="search-input"
            placeholder="Search Countries..."
            value = {query}
            onChange={(e) => onChange(e.target.value)} />
            {query && (
                <button className="clear-btn" onClick={() => onChange('')}>cross</button>
            )}
        </div>
    );
}
export default SearchBar;
