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

  addContact = data => {
    const { name, number } = data;
    const newContact = {
      id: nanoid(4),
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
    this.addContact(data);
  };

  handlerFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlerDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <Box fontSize={16} pt="60px" as="section">
          <h1
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '28px',
              color: '#1C4931',
            }}
          >
            Phonebook
          </h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Box>
        <Box fontSize={16} pt="30px" as="section">
          <h2
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '28px',
              color: '#1C4931',
            }}
          >
            Contacts
          </h2>
          <Filter
            filter={this.state.filter}
            handlerFilter={this.handlerFilter}
          />
          <ContactList
            contacts={filterContacts}
            handleDelete={this.handlerDelete}
          />
        </Box>
      </>
    );
  }
}
