interface Props {
	text: string
}

export default function KanbanItem(props: Props) {
  return (
    <div className="w-full">
        <hr />
        <h3 className="my-1">{props.text}</h3>
    </div>
  )
}
