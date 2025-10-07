import { type Todo } from "./todoList";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="flex justify-between p-2 border-white mb-3 rounded-md shadow-sm hover:shadow-md">
      <label className="cursor-pointer">
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span  className={`ml-4 ${todo.completed ? 'line-through' : 'no-underline'} text-gray-900`}>{todo.text}</span>
      </label>
      <button className="bg-black rounded-md text-white text-xs p-1 hover:text-red-600" onClick={onDelete}>Hapus</button>
    </li>
  );
}
