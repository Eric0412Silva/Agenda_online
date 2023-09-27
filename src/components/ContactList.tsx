import React from 'react';
import { Contact } from '..components/AddContact'; // Certifique-se de que o caminho está correto

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contatos Adicionados</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mb-2">
            {contact.name} - {contact.phone}
            
            <button
              className="ml-2 text-red-500"
              onClick={() => onDelete(contact.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
