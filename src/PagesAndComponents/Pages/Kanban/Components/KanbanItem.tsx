interface Props {
	data: string
}

export default function KanbanItem(props: Props) {
  return (
    <div className="w-full">
        <hr />
        <h3 className="my-1">{props.data}</h3>
    </div>
  )
}
