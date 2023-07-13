import { useEffect, useState } from 'react';
import { getNotesByModelId } from 'src/services/note.service';
import { Note } from 'src/types/note.types';

export const useNotes = ({ modelId }: { modelId: number }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  }, [modelId]);

  const fetchNotes = async () => {
    const response = await getNotesByModelId(modelId);

    setNotes(response);
  };

  return {
    notes,
    refetch: fetchNotes,
  };
};
