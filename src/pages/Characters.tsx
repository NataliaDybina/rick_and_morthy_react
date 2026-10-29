import {useState} from "react";
import {response} from "../components/CharacterCardProps.ts";
import {CharacterCard} from "../components/CharacterCard.tsx";
import {Searchbar} from "../components/Searchbar.tsx";

export default function Characters() {
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(5);

    const handleSearch = (term: string) => {
        setSearchTerm(term.toLowerCase());
        setVisibleCount(5)
    }
    const filteredCharacters = response.filter(character => character.name.toLowerCase().includes(searchTerm))
    const charactersToDisplay = filteredCharacters.slice(0, visibleCount)

    function handleShowNextFive() {
        setVisibleCount(visibleCount + 5)
    }

    return (
        <>
            <Searchbar searchTerm={searchTerm} onSearchChange={handleSearch}/>
            <div style={{marginBottom: '1.5rem'}}>
                <button
                    onClick={handleShowNextFive}
                    disabled={visibleCount >= filteredCharacters.length}
                    style={{
                        padding: '0.6rem 1.2rem',
                        cursor: visibleCount >= filteredCharacters.length ? 'not-allowed' : 'pointer'
                    }}
                >
                    Show next 5 characters
                </button>
                <span style={{marginLeft: '1rem', color: '#666'}}>
                    Showing {Math.min(visibleCount, filteredCharacters.length)} of {filteredCharacters.length}
                </span>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem'}}>
                {charactersToDisplay.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>

            {visibleCount >= filteredCharacters.length && filteredCharacters.length > 0 && (
                <p style={{marginTop: '2rem', color: '#666', textAlign: 'center'}}>
                    You have reached the end of the list!
                </p>
            )}</>
    )
}