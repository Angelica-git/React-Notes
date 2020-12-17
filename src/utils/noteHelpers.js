function initializeNotes() {
  // sets localstorage for the first time
  localStorage.setItem('notes', JSON.stringify([]))
  // returns an array
  return []
}

const archive = []

export function getNotes() {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    return initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function createNote(title, body) {
  const notes = getNotes()
  const newNote = {id: Date.now(), title, body}
  notes.push(newNote)
  console.log('about to save', notes)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}

export function updateNote(id, title, body) {
  const notes = getNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  // removes old note
  notes.splice(indexToUpdate, 1)
  // adds new note to start
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function deleteFromArchive(id) {
  const notes = getNotes()
  const indexToDelete = archive.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) archive.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function archiveNote(note) {
  // add to the archive
  archive.push(note)
  // remove the note from notes
  deleteNote(note.id)
}

export function unArchiveNote(note) {
  const notes = getNotes()
  // add to the notes
  notes.push(note)
  // remove the note from archive
  deleteFromArchive(note.id)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getArchive() {
  return archive
}
