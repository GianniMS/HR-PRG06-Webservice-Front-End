import {useEffect, useState} from "react";
import {Note} from "./Note";
import {NewNote} from "./NewNote";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {Layout} from "./Layout";
import {Error} from "./Error";
import {NoteDetail} from "./NoteDetail";
import "./App.css";

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
            .then((response) => response.json())
            .then((result) => setNotes(result.items))
    }

    const showNotes = notes.map((value, key) =>
        <Note key={value.id} note={value} notesRefreshHandler={loadJson}/>)

    useEffect(loadJson, [])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={showNotes}/>
                <Route path="create" element={<NewNote notesRefreshHandler={loadJson}/>}/>
                <Route path="notes/:id" element={<NoteDetail/>}/>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}