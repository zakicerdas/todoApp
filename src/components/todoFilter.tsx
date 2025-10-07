
export type FilterType = "all" | "active" | "completed";

interface Props {
  current: FilterType;
  onChange: (f: FilterType) => void;
}

export default function TodoFilter({ current, onChange }: Props) {
  return (
    <div className="bg-gray-200 p-2 rounded-md flex gap-4 shadow-inner mb-5">
      <button className="bg-gray-100 rounded-md p-0.5 hover:text-blue-500" onClick={() => onChange("all")} aria-pressed={current === "all"}>Semua</button>
      <button className="bg-gray-100 rounded-md p-0.5 hover:text-blue-500" onClick={() => onChange("active")} aria-pressed={current === "active"}>Aktif</button>
      <button className="bg-gray-100 rounded-md p-0.5 hover:text-blue-500" onClick={() => onChange("completed")} aria-pressed={current === "completed"}>Selesai</button>
    </div>
  );
}