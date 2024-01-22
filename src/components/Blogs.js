import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/Blogs/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { Navigate, useNavigate } from "react-router-dom";
import AllNoteItem from "./AllNoteItem";
import "../css/background.css";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, addNote, editNote, getAllNotes } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  let navigate = useNavigate();

  const ref = useRef(null);
  const refClose = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Updating Note...", note);
    refClose.current.click();
    editNote(note._id, note.title, note.description, note.tag);
    getNotes();
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  // const BlogList = ({ notes }) => {
  //   const gridContainerStyles = {
  //     display: 'grid',
  //     gridTemplateColumns: 'repeat(3, 1fr)', // Three columns of equal width
  //     gap: '16px', // Adjust the gap between columns
  //   };
  // }

  return (
    <div className="fixed-width-container">
      <div className="row">
        <div className="col-md-6">
          <h2>Blogs</h2>
          <div>
            <div class="row">
              {notes.map((note) => {
                return (
                  <div class="col-4">
                    <AllNoteItem key={note._id} notes={note} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-6 mx-7">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1500">
                <img src="images/ad1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src="images/ad2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="1500">
                <img src="images/ad4.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
