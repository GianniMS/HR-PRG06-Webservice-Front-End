import {useState} from "react";

export function Note(props) {
    console.log(props);

    const deleteNote = () => {
        fetch(props.note._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.notesRefreshHandler())
    }

    return <section>
        <h2>{props.note.title}</h2>
        <button onClick={deleteNote}>DELETE</button>
    </section>;
}