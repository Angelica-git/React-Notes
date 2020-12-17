import React, {useContext} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {LanguageContext} from '../context/LanguageContext'

export default function List({selectedNote, setSelectedNote, notes}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  const {lang} = useContext(LanguageContext)

  if (!notes.length) return lang['noNotesFound']

  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
