import React, { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface AddContactProps {
  onAddContact: (newContact: Contact) => void;
}

const AddContact: React.FC<AddContactProps> = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState<Contact>({ id: 0, name: '', phone: '' });

  const handleAddContactClick = () => {
    console.log('Nome do Contato:', newContact.name);
    console.log('Número de Telefone:', newContact.phone);

    // Valide o novo contato, se necessário
    if (newContact.name.trim() !== '' && newContact.phone.match(/^\(\d{2}\) \d\.\d{4}-\d{4}$/)) {
      // Gere um ID único para o novo contato
      const id = Date.now();
      const contactWithId: Contact = { ...newContact, id };
      console.log('Novo Contato:', contactWithId);
      onAddContact(contactWithId);
      setNewContact({ id: 0, name: '', phone: '' }); // Limpar os campos após adicionar
    } else {
      console.log('Erro: O novo contato não atende aos critérios de validação.');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Adicionar Novo Contato</h2>
      <input
        type="text"
        placeholder="Nome do Contato"
        className="w-full border rounded-lg p-2 mb-2"
        value={newContact.name}
        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="(xx) x.xxxx-xxxx"
        className="w-full border rounded-lg p-2 mb-2"
        value={newContact.phone}
        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleAddContactClick}
      >
        Adicionar Contato
      </button>
    </div>
  );
};

export default AddContact;
