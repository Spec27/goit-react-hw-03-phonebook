import React, { Component } from "react";
import Form from "./Form";
import ContactList from './ContactList'
import Filter from "./Filter"
import s from './App.module.css'
import shortid from "shortid";


class App extends Component{

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
 
  addContact = ({ name, number }) => {
    const {contacts}= this.state
    const newContact = {
      id: shortid.generate(),
      name,
      number
    };
    

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ){
      alert(`${name} is already in contacts.`);
    }
    else {
      this.setState(prevState => ({
        contacts: [newContact,...prevState.contacts]
      }));
    }
    
}
    
  changeFilter = event => {
    this.setState({filter:event.currentTarget.value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId),
    }))
  }

  componentDidMount() {
    const cotact = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(cotact);
    if (parsedContact) {
      this.setState({contacts: parsedContact})
    }
  };


  componentDidUpdate(prevProps,prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
    }
  }
  

  render() {
    const {  filter } = this.state;
    const nomalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contacts => contacts.name.toLowerCase().includes(nomalizedFilter));


    return (
      <>
      <div className={s.Container}> 
      <h1 className={s.Title}>Phonebook</h1>
          <Form onSubmit={this.addContact} />   
          <h2 className={s.Title}>Contacts</h2>
          <Filter value={filter} onChange={ this.changeFilter} />
          <ContactList contacts={visibleContact} onDeleteContact={this.deleteContact } />
        </div>
        
      </>
    )
  }
}
export default App;
