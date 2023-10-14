// BoxList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BoxList from './BoxList';

test('can add a new box', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<BoxList />);

  // fill out the form
  userEvent.type(getByPlaceholderText('Width'), '100');
  userEvent.type(getByPlaceholderText('Height'), '100');
  fireEvent.change(getByPlaceholderText('Color'), { target: { value: '#FF0000' } });
  const addButton = getByText('Add Box');
  fireEvent.click(addButton);

  // check if the box is in the DOM
  const removeButton = queryByText('X');
  expect(removeButton).toBeInTheDocument();
});

test('can delete a box', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<BoxList />);

  // fill out the form to add a box
  userEvent.type(getByPlaceholderText('Width'), '100');
  userEvent.type(getByPlaceholderText('Height'), '100');
  fireEvent.change(getByPlaceholderText('Color'), { target: { value: '#FF0000' } });
  const addButton = getByText('Add Box');
  fireEvent.click(addButton);

  // remove the box
  const removeButton = getByText('X');
  fireEvent.click(removeButton);
  
  // check if the box has been removed
  expect(removeButton).not.toBeInTheDocument();
});
