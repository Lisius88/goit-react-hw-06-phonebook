import { Item, Button } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Button onClick={onDeleteClick} id={id} type="button">
        x
      </Button>
    </Item>
  );
};
