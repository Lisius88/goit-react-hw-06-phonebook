import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContent } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const listContainsContact = contact => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const contact = { name, number, id: nanoid() };

    if (listContainsContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };
  return (
    <FormContent onSubmit={handleSubmit}>
      <label>
        {' '}
        Name
        <input
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        {' '}
        Number
        <input
          onChange={handleInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </FormContent>
  );
};
