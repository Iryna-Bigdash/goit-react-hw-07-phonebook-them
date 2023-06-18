import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { ThemeProvider } from '@emotion/react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const currentTheme = useSelector(state => state.theme);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const theme = currentTheme === 'light' ? { theme: 'light' } : { theme: 'dark' };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ThemeToggleButton />
        <Title>Phone book</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Container>
    </ThemeProvider>
  );
};

export default App;



