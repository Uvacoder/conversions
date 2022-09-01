import { AxiosPromise } from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch<T extends AxiosPromise>(
  requestFn: () => T,
  deps: string[] = [],
  {
    runAfterSuccess,
    cachedData,
    skipRender,
  }: {
    runAfterSuccess?: (data: T) => void;
    skipRender?: () => boolean;
    cachedData?: () => T | null;
  } = {}
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    let cancelRequest = false;

    const fetchData = async () => {
      if (skipRender && skipRender()) return; //skip render

      //if has cached value
      const cached = (cachedData && cachedData()) || null;
      if (cached) return setData(cached);

      setIsLoading(true);

      await requestFn()
        .then((response) => {
          const data = response.data as T;
          if (cancelRequest) return;
          runAfterSuccess && runAfterSuccess(data);
          setData(data);
        })
        .catch((error: Error) => {
          if (cancelRequest) return;
          setError(error as Error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, [...deps]);

  return { data, isLoading, error };
}
