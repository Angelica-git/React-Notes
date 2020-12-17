import React, {useState, useContext} from 'react'
import {getNotes, getArchive} from '../utils/noteHelpers'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import List from './List'
import Form from './Editor'
import {NoteContext} from '../context/NoteContext'
import LanguageButtons from '../context/LanguageButtons'
import {LanguageContext} from '../context/LanguageContext'

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [showArchive, setShowArchive] = useState(false)
  const {notes, setNotes} = useContext(NoteContext)
  const [archivedNotes, setArchivedNotes] = useState([])
  const {lang} = useContext(LanguageContext)

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    const archivedNotes = getArchive()
    setNotes([...notes])
    setArchivedNotes([...archivedNotes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <h1>Notes by Angelica</h1>
          <p>React app!</p>
        </Container>
      </Jumbotron>
      <LanguageButtons />
      <Row>
        <Col sm={4}>
          <>
            <Button onClick={onClickNewNote} variant="dark" size="md" block className="mb-4">
              {lang['newNote']}
            </Button>
          </>
          <List
            notes={showArchive ? archivedNotes : notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
          <Button
            onClick={() => setShowArchive(!showArchive)}
            variant={showArchive ? 'primary' : 'secondary'}
            size="md"
            block
            className="mt-4"
          >
            {showArchive ? <i class="fas fa-sticky-note"></i> : <i class="fas fa-inbox"></i>} &nbsp;
            {showArchive ? lang['notes'] : lang['archive']}
          </Button>
        </Col>
        <Col>
          <Form isArchived={showArchive} refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}
