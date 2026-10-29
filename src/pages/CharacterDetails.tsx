import "./CharacterDetails.css";
import {response} from "../components/CharacterCardProps.ts";
import {useParams} from "react-router";
import NotFound from "./NotFound.tsx";


export default function CharacterDetails() {
    const params = useParams();
    const characterId = params.id ? Number(params.id) : null;
    const character = response.find(character => character.id === characterId);

    if (!character) {
        return <NotFound/>;
    }
    const statusColor =
        character.status === "Alive" ? "#28a745" :
            character.status === "Dead" ? "#dc3545" : "#ffc107";

    return (
        <div className="character-card">
            <div className="character-image-container">
                <img src={character.image} alt={character.name} className="character-image"/>
            </div>

            <div className="character-content">
                <h3 className="character-title">{character.name}</h3>

                <div className="character-status-wrapper">
                    <span className="status-dot" style={{backgroundColor: statusColor}}></span>
                    <span className="character-status-text">{character.status} — {character.species}</span>
                </div>

                <div className="character-info-group">
                    <p className="character-info-text">
                        <strong>Last known location:</strong><br/>
                        <span className="character-sub-text">{character.location.name}</span>
                    </p>
                    <p className="character-info-text">
                        <strong>Origin:</strong><br/>
                        <span className="character-sub-text">{character.origin.name}</span>
                    </p>
                    <p className="character-info-text">
                        <strong>Episodes:</strong> <span
                        className="character-sub-text">{character.episode.length} appearances</span>
                    </p>
                </div>
            </div>
        </div>
    )
}