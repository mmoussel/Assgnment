import { View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { AddNoteInput } from 'src/components/model/add-note-input.component';
import { NotesHistory } from 'src/components/model/notes-history.component';
import { Note } from 'src/types/note.types';
import { getNotesByModelId } from 'src/services/note.service';

export const NotesSection = ({ modelId }: { modelId: number }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await getNotesByModelId(modelId);

    setNotes(response);
  };

  return (
    <View>
      <AddNoteInput modelId={modelId} onSuccess={getNotes} />

      <NotesHistory notes={notes} />
    </View>
  );
};
