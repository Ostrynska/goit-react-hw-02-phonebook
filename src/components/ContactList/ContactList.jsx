// import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
