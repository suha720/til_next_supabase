import { fetchTodos } from '@/apis/todo';
import { QUERY_KEYS } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export function useFetchTodos() {
  return useQuery({
    queryKey: QUERY_KEYS.todo.list, // 저장소 이름
    queryFn: fetchTodos,
    staleTime: 5 * 1000,
  });
}
