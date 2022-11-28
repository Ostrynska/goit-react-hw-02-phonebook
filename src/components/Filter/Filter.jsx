import React, { Component } from 'react';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, commitInputFilter }) => {
  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          value={filter}
          type="text"
          name="filter"
          onChange={commitInputFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
