import React, { useState, useEffect } from 'react';
import { ContactForm, ContactList, Filter, Section } from './Phonebook';
import { nanoid } from 'nanoid';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = data => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, { ...data, id: nanoid() }]);
  };

  const handleTypeFilter = value => {
    setFilter(value);
  };

  const handleRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook" />
      <ContactForm onAddContact={handleAddContact} />
      <Section title="Contacts" />
      <Filter filter={filter} onTypeFilter={handleTypeFilter} />
      <ContactList
        contacts={filterList}
        onRemoveContact={handleRemoveContact}
      />
    </>
  );
}

export default App;
