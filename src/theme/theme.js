import { createTheme } from '@mui/material';

const baseTypography = {
  fontFamily: 'Inter, Arial, sans-serif',
  h1: {
    fontWeight: 700,
  },
  h2: {
    fontWeight: 700,
  },
  h3: {
    fontWeight: 600,
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 500,
  },
  h6: {
    fontWeight: 500,
  },
  subtitle1: {
    fontWeight: 400,
  },
  subtitle2: {
    fontWeight: 400,
  },
  body1: {
    fontWeight: 400,
  },
  body2: {
    fontWeight: 400,
  },
  button: {
    fontWeight: 600,
  },
  caption: {
    fontWeight: 400,
  },
  overline: {
    fontWeight: 400,
  },
};

// Dark Theme
// Modern Light Theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6200ea', // Modern Purple
    },
    secondary: {
      main: '#03dac6', // Modern Teal
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
  typography: baseTypography,
});

// Modern Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Modern Light Purple
    },
    secondary: {
      main: '#03dac6', // Modern Teal
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: baseTypography,
});

// Modern GitHub Theme
const githubTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0366d6', // GitHub Blue
    },
    secondary: {
      main: '#28a745', // GitHub Green
    },
    background: {
      default: '#ffffff',
      paper: '#f6f8fa',
    },
    text: {
      primary: '#24292e',
      secondary: '#586069',
    },
  },
  typography: baseTypography,
});

// Modern Facebook Theme
const facebookTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1877f2', // Facebook Blue
    },
    secondary: {
      main: '#42b72a', // Facebook Green
    },
    background: {
      default: '#ffffff',
      paper: '#f0f2f5',
    },
    text: {
      primary: '#050505',
      secondary: '#65676b',
    },
  },
  typography: {
    ...baseTypography,
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

// Modern Twitter Theme
const twitterTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1da1f2', // Twitter Blue
    },
    secondary: {
      main: '#14171a', // Twitter Dark Gray
    },
    background: {
      default: '#ffffff',
      paper: '#e6ecf0',
    },
    text: {
      primary: '#14171a',
      secondary: '#657786',
    },
  },
  typography: baseTypography,
});


export {
  darkTheme,
  lightTheme,
  githubTheme,
  facebookTheme,
  twitterTheme,
};