import {type SubmitEvent} from "react";
import type {CharacterCardProps} from "../components/CharacterCard.tsx";
import * as React from "react";
import {useNavigate} from "react-router";

type NewCharacterProps = {
    characters: CharacterCardProps[];
    setCharacters: React.Dispatch<React.SetStateAction<CharacterCardProps[]>>;
}
export default function NewCharacter({characters, setCharacters}: NewCharacterProps) {
    const navigate = useNavigate();

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form);
        const newCharacter: CharacterCardProps = {
            id: characters.length > 0 ? Math.max(...characters.map(c => c.id)) + 1 : 1,
            name: data.name.toString(),
            status: data.status.toString(),
            species: data.species.toString()
        }
        setCharacters([...characters, newCharacter]);
        navigate("/characters");
    }

    return (
        <>
            <h2>Create new character</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' placeholder='Enter name'/>
                <label htmlFor='status'>Status</label>
                <input type='text' name='status' id='status' placeholder='Enter status'/>
                <label htmlFor='species'>Species</label>
                <input type='text' name='species' id='species' placeholder='Enter species'/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}