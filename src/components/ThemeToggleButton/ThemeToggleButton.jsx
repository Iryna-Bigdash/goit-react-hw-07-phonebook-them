import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/themeSlice';
import { IconButton } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)`
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`;

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  const isDarkTheme = currentTheme === 'dark';

  return (
    <StyledIconButton onClick={toggleTheme} theme={currentTheme}>
      {isDarkTheme ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}
    </StyledIconButton>
  );
};

export default ThemeToggleButton;

