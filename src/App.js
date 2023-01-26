import {useEffect, useState} from "react";
import {Note} from "./Note";
import {NewNote} from "./NewNote";
import {BrowserRouter} from "react-router-dom";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function App() {
    const [notes, setNotes] = useState([]);

    const loadJson = () => {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response. json())
            .then((result) => setNotes(result.items))
    }

    const showNotes = notes.map((value, key) =>
        <Note key={value.id} note={value} notesRefreshHandler={loadJson} />)

    useEffect(loadJson, [])

    return <BrowserRouter>
        <h1>Notes - Example</h1>
      {showNotes}
      <NewNote notesRefreshHandler={loadJson}/>
    </BrowserRouter>;
}