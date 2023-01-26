import {useState} from "react";

const URI_COLLECTION = "https://docent.cmi.hro.nl/bootb/demo/notes"

export function NewNote(props) {
    console.log(props);

    const [note, setNote] = useState({
        title: "",
        body: "",
        author: ""
    })

    const saveNote = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then((response) => props.notesRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>New Note</h2>
        <form>
            <input type="text" value={note.title} name="title" onChange={onChangeHandler}/><br/>
            <input type="text" value={note.body} name="body" onChange={onChangeHandler}/><br/>
            <input type="text" value={note.author} name="author" onChange={onChangeHandler}/><br/>
            <button onClick={saveNote}>SAVE</button>
        </form>
    </section>;
}