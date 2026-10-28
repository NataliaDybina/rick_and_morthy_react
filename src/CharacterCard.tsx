import type {CharacterCardProps} from "./CharacterCardProps.ts";

export function CharacterCard({character}: { character: CharacterCardProps }) {
    const {id, name, image, species, status} = character
    return (
        <div key={id}
             style={{border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center'}}>
            <img
                src={image}
                alt={name}
                style={{width: '100%', borderRadius: '50%'}}
            />
            <h3>{name}</h3>
            <p>{species} — {status}</p>
        </div>
    )
}