import { fetchTodos } from '@/apis/todo';
import { useQuery } from '@tanstack/react-query';

export function useFetchTodos() {
  return useQuery({
    queryKey: ['todos'], // 저장소 이름
    queryFn: fetchTodos,
    staleTime: 5 * 1000,
  });
}
