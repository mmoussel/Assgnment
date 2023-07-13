import { View } from 'react-native';
import React from 'react';

import { AddNoteInput } from 'src/components/model/add-note-input.component';
import { NotesHistory } from 'src/components/model/notes-history.component';
import { useNotes } from 'src/hooks/use-notes.hook';

export const NotesSection = ({ modelId }: { modelId: number }) => {
  const { notes, refetch } = useNotes({ modelId });

  return (
    <View>
      <AddNoteInput modelId={modelId} onSuccess={refetch} />

      <NotesHistory notes={notes} />
    </View>
  );
};
