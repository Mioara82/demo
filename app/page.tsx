"use client";
import StoreProvider from "./StoreProvider";
import { useSelector } from "@/lib/hooks";

const List = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map(todo => (
        <li key={todo.id}>{todo.value}</li>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <StoreProvider>
      <List />
    </StoreProvider>
  );
}
