import type {CharacterCardProps} from "./CharacterCardProps.ts";
import "./CharacterCard.css"
import {useNavigate} from "react-router";

export function CharacterCard({character}: { character: CharacterCardProps }) {
    const {id, name, image, species, status} = character
    const navigate = useNavigate();

    return (
        <div className="character-card-container"
             onClick={() => {
                 navigate("/characters/" + id)
             }}>
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