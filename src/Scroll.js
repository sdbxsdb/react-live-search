
const Scroll = (props) => {
  return (
    <div className="overflow-y-scroll mt-2 h-[85vh] no-scrollbar">
      {props.children}
    </div>
  )
}

export default Scroll