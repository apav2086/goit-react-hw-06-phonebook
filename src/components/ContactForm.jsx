import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, addContact } from 'redux/slice';
import { getItems, getFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getItems);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleContactInfo = () => {
    const data = { id: nanoid(), name: name, number: number };
    dispatch(addContact(data));
    if (filterValue !== '') {
      dispatch(changeFilter(''));
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase()));
    if (filterValue !== '') {
      dispatch(changeFilter(''));
    }

    return alert(`${name} is already in contacts`);
  }

  
    const resetForm = () => { 
    setName('');
    setNumber('');
  };


  handleContactInfo();
  resetForm();


    
  const onChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
  
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };



  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="inputContainer">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}

export default ContactForm;