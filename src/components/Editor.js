import React, {useState, useEffect, useContext} from 'react'
import BSForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  deleteFromArchive,
  archiveNote,
  unArchiveNote,
} from '../utils/noteHelpers'
import Alert from 'react-bootstrap/Alert'
import {LanguageContext} from '../context/LanguageContext'

const STATUS_INITIAL_VALUE = ''

export default function Form({selectedNote, setSelectedNote, refreshList, isArchived}) {
  console.log(selectedNote)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
  const [variant, setVariant] = useState('')
  const {lang} = useContext(LanguageContext)

  //if (selectedNote) setTitle(selectedNote.title)

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('') && setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 3000)
  }, [status])

  useEffect(() => {
    if (selectedNote) return setVariant('')
  }, [variant])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    setTitle('')
    setBody('')
    setStatus(lang['saved'])
    setVariant('success')
    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }

    console.log('Saving new note:', title)
    createNote(title, body)
    refreshList()
    console.log(getNotes())
  }

  const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    deleteFromArchive(id)
    refreshList()
    setTitle('')
    setBody('')
    setStatus(lang['deleted'])
    setVariant('danger')
  }

  const handleArchive = (e) => {
    e.preventDefault()
    if (isArchived) {
      unArchiveNote(selectedNote)
    } else {
      archiveNote(selectedNote)
    }
    refreshList()
    setTitle('')
  }

  return (
    <BSForm>
      <BSForm.Group controlId="formGroupTitle">
        <BSForm.Label>{lang['title']}</BSForm.Label>
        <BSForm.Control value={title} onChange={onChangeTitle} />
      </BSForm.Group>
      <BSForm.Group controlId="formGroupNote">
        <BSForm.Label>{lang['body']}</BSForm.Label>
        <BSForm.Control as="textarea" value={body} onChange={onChangeBody} />
      </BSForm.Group>
      <Button onClick={onSave} variant="success" style={styles.button}>
        {lang['save']}
      </Button>
      {selectedNote && (
        <Button onClick={onDelete} variant="danger" style={styles.button}>
          {lang['delete']} <i class="fas fa-trash-alt"></i>
        </Button>
      )}
      {selectedNote && (
        <Button onClick={handleArchive} variant="secondary" style={styles.button}>
          {isArchived ? lang['unarchive'] : lang['archive']}
        </Button>
      )}
      {status && (
        <Alert className="mt-2" variant={variant}>
          {status}
        </Alert>
      )}
    </BSForm>
  )
}

const styles = {
  button: {marginRight: 10},
}
