import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoSlice from '../TodoList/todoSlice';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, todoChecked, todoId }) {
  const [checked, setChecked] = useState(todoChecked);

  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    dispatch(todoSlice.actions.checkedTodo(todoId))
    setChecked(!checked);
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
