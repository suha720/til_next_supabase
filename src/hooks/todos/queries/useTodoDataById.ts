import { fetchTodoById } from '@/apis/todo';
import { useQuery } from '@tanstack/react-query';

export function useTodoDataById(id: number) {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => fetchTodoById(id),
    // 5초 동안 프레시
    staleTime: 5000,
    // 10초 동안 Inavtice
    gcTime: 10000,
  });
}
