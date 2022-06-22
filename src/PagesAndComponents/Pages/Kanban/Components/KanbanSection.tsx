import KanbanItem from "./KanbanItem";

export default function KanbanSection() {
  return (
    <div className="h-3/4 w-64 p-1 bg-white rounded-md">
		<h1 className="text-xl">Todo</h1>
		<KanbanItem />
		<KanbanItem />
		<hr />
    </div>
  )
}
