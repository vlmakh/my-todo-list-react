import { EditNoteForm, SaveBtn } from './NoteEditModal.styled';
import { FaSave } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function NoteEditModal({
  nameToUpdate,
  saveNoteName,
  cancelEdit,
  bgColor,
}) {
  const [newName, setNewName] = useState(nameToUpdate);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = event => {
    if (event.code === 'Escape') {
      cancelEdit();
    }
  };

  const onFormInput = event => {
    setNewName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    saveNoteName(newName);
  };

  return (
    <EditNoteForm onSubmit={handleSubmit} backgroundColor={bgColor}>
      <input
        type="text"
        name="newName"
        value={newName}
        onChange={onFormInput}
      />
      <SaveBtn type="submit" aria-label="Save task">
        <FaSave size="20" />
      </SaveBtn>
    </EditNoteForm>
  );
}