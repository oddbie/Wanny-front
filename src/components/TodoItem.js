import { Radio } from '@mui/material';

function TodoItem(prop) {
  return (
    <div>
      <Radio
        onClick={(e) => {
          console.log('radio clicked');
        }}
      />
      <div>item: {prop.item}</div>
      <div>category: {prop.category}</div>
      <div>dueDate: {prop.dueDate}</div>
      <div>finishDate: {prop.finishDate}</div>
    </div>
  );
}

export default TodoItem;
