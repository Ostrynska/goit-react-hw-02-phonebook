import React, { Component } from "react";
import Form from "./Form";
import Contacts from "./Contacts";


export class App extends Component
{
    state = {
        contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter: '',
  }

  
  formSubmitHandler = data =>
  {
    this.state.contacts.push(data)
  }

  formFilter = e => {
    this.setState({ filter: e.target.value });
  };


  render()
    {
      return (
        <>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
          <Contacts
            contacts={this.state.contacts}/>
        </>
        )
    }
}