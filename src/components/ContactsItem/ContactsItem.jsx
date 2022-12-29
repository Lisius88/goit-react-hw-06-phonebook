import PropTypes from 'prop-types';
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

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
