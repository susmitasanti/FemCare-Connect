import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/Blogs/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { Navigate, useNavigate } from 'react-router-dom'
import AllNoteItem from './AllNoteItem'
import '../css/background.css'

function Notes() {
    const context = useContext(noteContext)
    const { notes, getNotes, addNote, editNote, getAllNotes} = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    let navigate=useNavigate()


    const ref = useRef(null)
    const refClose=useRef(null)
    useEffect(() => {
        if(localStorage.getItem('token')){
            getAllNotes()
        }
        else{
            navigate('/login')
        }
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }


    const handleClick = (event) => {
        event.preventDefault();
        console.log("Updating Note...", note)
        refClose.current.click();
        editNote(note._id, note.title, note.description, note.tag)
        getNotes()
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })

    }
    return (
        <>

            <div className="row my-3">
                <h2>Blogs</h2>
                {notes.map((note) => {
                    //    return note.title
                    return <AllNoteItem key={note._id} notes={note} />
                })}
            </div>
        </>
    )
}

export default Notes
