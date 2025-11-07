import { updateTodo } from '@/apis/todo';
import { QUERY_KEYS } from '@/lib/constants';
import { Todo } from '@/types/todo-type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateTodoMutation() {
  // 1. 전역 접근용 변수
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    // mutate 함수가 실행되는 시점에 작성
    onMutate: async updatedTodo => {
      // 요청 취소 기능 구현
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.todo.list });

      // 원본 데이터를 보관함.
      const originTodos = queryClient.getQueryData<Todo[]>(
        QUERY_KEYS.todo.list
      );

      // 캐시 데이터를 업데이트 기능 작성
      // 2. 데이터 일부만 수정함.
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, prevTodos => {
        if (!prevTodos) return [];
        return prevTodos.map(todo =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
        );
      });

      return { originTodos };
    },
    onError: (error, valiable, context) => {
      console.log(error);

      // 원상복구를 위해서 context 에 보관해둔 값으로 갱신한다.
      if (context?.originTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.originTodos
        );
      }

      return { error };
    },
    // 요청이 완료됨
    onSettled: () => {
      // 검증 과정
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.todo.list });
    },
  });
}
