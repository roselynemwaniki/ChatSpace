import React from 'react'

function ContactList() {

    const contacts = [
        { name: 'John Doe', lastSeen: 'Online' },
        { name: 'Jane Smith', lastSeen: '2 hours ago' },
        { name: 'Michael Brown', lastSeen: '5 minutes ago' },
      ];

  return (
    <div className='ContactList'>
       {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <p>{contact.name}</p>
          <small>{contact.lastSeen}</small>
        </div>
      ))}      
    </div>
  )
}

export default ContactList
