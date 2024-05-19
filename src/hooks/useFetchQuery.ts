
import { QueryKey, useQuery } from '@tanstack/react-query';
import { queryFn } from '../utils/api-helpers';

interface FetchListProps {
  url: string;
  params?: { [key: string]: any };
}

export const useFetchQuery = ({ url, params = {} }: FetchListProps) => {
  const queryKey: QueryKey = params ? ['GET', url, params] : ['GET', url];
 
  return useQuery({
    queryKey,
    queryFn: (context) => queryFn(context, params),
  });
};