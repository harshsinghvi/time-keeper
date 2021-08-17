import { useState } from "react";
import "./Todo.css";

function TodoList(props) {
  const [text, setText] = useState(props.textValue);

  const handleChange = (event) => {
    setText(event.target.value);
    props.setText(event.target.value);
  };
  return (
    <div className="TodoList">
      <textarea
        className="Todo"
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "100%",
          background: "#121212",
          color: "#b3b3b3",
        }}
      />
    </div>
  );
}

export default TodoList;
