import PropTypes from 'prop-types';
import { Filterlabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);
  const handleInputChange = event => {
    const value = event.target.value;
    dispatch(filterContacts(value));
  };

  return (
    <Filterlabel>
      <label>
        Find contacts by name
        <input onChange={handleInputChange} value={filterValue} type="text" />
      </label>
    </Filterlabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
