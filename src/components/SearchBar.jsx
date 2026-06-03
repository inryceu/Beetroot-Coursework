const SearchBar = ({onSearch}) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onKeyDown={(event) => {
                if (event.key === "Enter") {
                    onSearch(event.target.value);
                }
            }}
        />
    );
}

export default SearchBar;