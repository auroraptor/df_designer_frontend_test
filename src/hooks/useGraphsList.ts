import { useEffect, useState } from 'react';

const useGraphsList = () => {
  const [graphs, setGraphs] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGraphs = async () => {
      try {
        const response = await fetch('/api/graphs');
        const data = await response.json();
        console.log('data: ', data);
        setGraphs(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        console.log('error: ', error)
        setLoading(false);
      }
    };

    fetchGraphs();
  }, []);

  return { graphs, loading, error };
};

export default useGraphsList;
