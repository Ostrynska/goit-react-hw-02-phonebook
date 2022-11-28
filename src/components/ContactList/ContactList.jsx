// import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsListItem,
  ContactsListInf,
  ContactsListButton,
} from './ContactList.styled';
import { IoTrashBinOutline } from 'react-icons/io5';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsListItem key={contact.id}>
            <MdOutlinePermContactCalendar />
            <ContactsListInf>
              {contact.name}: {contact.number}
            </ContactsListInf>
            <ContactsListButton onClick={() => handleDelete(contact.id)}>
              <IoTrashBinOutline />
            </ContactsListButton>
          </ContactsListItem>
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
