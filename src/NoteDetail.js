import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./App.css";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function NoteDetail() {
    const params = useParams()

    const [note, setNotes] = useState(null);

    const loadJson = () => {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setNotes(result))
    }

    useEffect(() => {
        loadJson()
    }, [])

    return <section>
        <h1>{note && note.title}</h1>
        <p>{note && note.body}</p>
        <p>{note && note.author}</p>
    </section>
}