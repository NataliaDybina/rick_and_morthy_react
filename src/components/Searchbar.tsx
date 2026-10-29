type SearchbarProps = {
    searchTerm: string;
    onSearchChange: (searchTerm: string) => void;
}

export function Searchbar({searchTerm, onSearchChange}: SearchbarProps) {
    return (
        <div style={{marginBottom: '1.5rem'}}>
            <label htmlFor="search" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
                Search:
            </label>
            <input
                id="search"
                type="text"
                placeholder="Type a character name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{padding: '0.5rem', width: '100%', maxWidth: '300px', fontSize: '1rem'}}
            />
        </div>
    )
}
