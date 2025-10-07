import React, { useState } from "react";

interface Props { onAdd: (text: string) => void; }

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit} className='flex gap-4 mb-6 '>
      <input className="border-1 rounded-md" value={text} onChange={e => setText(e.target.value)} placeholder="Tambah tugas..." />
      <button className='bg-black p-1 rounded-md text-white hover:text-blue-400' type="submit">Tambah</button>
    </form>
  );
}
