import { useEffect, useState } from 'react';
import { getModels } from 'src/services/model.service';
import { Model } from 'src/types/model.types';

export const useModels = ({ searchKey }: { searchKey: string }) => {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    fetchModels();
  }, [searchKey]);

  const fetchModels = async () => {
    const response = await getModels({ searchKey });

    setModels(response);
  };

  return {
    models,
    refetch: fetchModels,
  };
};
