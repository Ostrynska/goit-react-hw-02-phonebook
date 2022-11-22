import React, { Component } from 'react';

const Filter = ({ filter, commitInputFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          value={filter}
          type="text"
          name="filter"
          placeholder="start typing here"
          onChange={commitInputFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
};

export default Filter;
