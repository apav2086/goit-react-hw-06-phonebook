
import { useSelector } from 'react-redux';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';


function App() {
const contacts = useSelector(state => state.contact);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm  />
      <Filter />
      {contacts.length > 0 ? (
<ContactList />
      ) : ( <h4>There are no contacts yet</h4> )}
       
    </div>
  );
};
export default App;