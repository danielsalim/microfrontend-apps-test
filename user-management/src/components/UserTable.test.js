import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserTable from './UserTable'; // Adjust the import path

describe('UserTable component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserList />
      </MemoryRouter>
    );
  });
  
  it('renders the UserTable component', () => {
    render(<UserTable />);
    // Check if a specific element is rendered in the component
    expect(screen.getByText('User Table')).toBeInTheDocument();
  });

  it('allows searching for users', () => {
    render(<UserTable />);
    // Simulate user typing in the search input field
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'John' } });
    // Check if the search query is updated
    expect(screen.getByPlaceholderText('Search')).toHaveValue('John');
  });

  it('allows adding a new user', () => {
    render(<UserTable />);
    // Simulate clicking the "Add User" button
    fireEvent.click(screen.getByText('Add User'));
    // Check if the Add User modal is displayed
    expect(screen.getByText('Add User Modal Title')).toBeInTheDocument(); // Replace with the actual modal title
  });

  // Add more test cases for editing, deleting, and other interactions as needed
});
