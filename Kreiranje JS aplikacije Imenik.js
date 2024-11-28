import React, { useState, useEffect } from 'react';

const KreiranjejsaplikacijeImenik = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Učitaj kontakte iz lokalnog skladišta prilikom prvog pokretanja
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  // Funkcija za dodavanje kontakta
  const addContact = () => {
    if (!name || !phone) return alert('Molimo popunite oba polja!');
    const newContact = { name, phone };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setName('');
    setPhone('');
  };

  // Funkcija za brisanje kontakta
  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Imenik</h1>
      <div>
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Broj telefona"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Dodaj</button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KreiranjejsaplikacijeImenik;
