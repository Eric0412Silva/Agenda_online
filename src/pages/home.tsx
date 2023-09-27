import React, { useState } from 'react';
import AddContact from '../components/AddContact'
import ContactList from '../components/ContactList';

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);


  const handleAddContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };


  const handleDelete = (id: number) => {
    
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <div className="container">
        <div className="add-contact">
          <AddContact
            onAddContact={handleAddContact}
          />
        </div>
        <div className="contact-list">
          <ContactList
            contacts={contacts}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
