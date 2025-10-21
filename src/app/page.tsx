import Counter from '@/components/Counter';
import ThemeToggle from '@/components/ThemeToggle';
import TodoList from '@/components/TodoList';
import UserProfile from '@/components/UserProfile';

export default function Home() {
  return (
    <div>
      {/* <ButtonTest />
      <SCSSTest /> */}
      <Counter />
      <br />
      <UserProfile />
      <br />
      <ThemeToggle />
      <br />
      <TodoList />
    </div>
  );
}
