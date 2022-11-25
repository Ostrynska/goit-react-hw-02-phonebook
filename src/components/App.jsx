import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts
        .map(({ name }) => name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  formSubmitHandler = data => {
    this.addNewContact(data);
  };

  commitInputFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <>
        <Box fontSize={16} pt="80px" as="section">
          <h1
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '32px',
              color: '#1C4931',
            }}
          >
            Phonebook
          </h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Box>
        <Box fontSize={16} pt="40px" as="section">
          <h2
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '32px',
              color: '#1C4931',
            }}
          >
            Contacts
          </h2>
          <Filter
            filter={this.state.filter}
            commitInputFilter={this.commitInputFilter}
          />
          <ContactList
            contacts={filterContacts}
            handleDelete={this.handleDelete}
          />
        </Box>
      </>
    );
  }
}
