import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { todoRemaining } from '../redux/selector' 
import todoSlice from "./todoSlice";

export default function TodoList() {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemaining);

  const dispatch = useDispatch();

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  const priorityChangleHandler = (value) => {
    setPriority(value);
  };

  const addTodoHandler = () => {
    if (text) {
      dispatch(todoSlice.actions.addTodo({
          id: uuidv4(),
          name: text,
          priority: priority,
          completed: false,
        })
      );
    }
    setText('')
    setPriority('Medium')
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo key={todo.id} name={todo.name} prioriry={todo.priority} todoChecked={!todo.completed} todoId={todo.id} />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={text} onChange={textChangeHandler} />
          <Select
            defaultValue="Medium"
            onChange={priorityChangleHandler}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={addTodoHandler}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
