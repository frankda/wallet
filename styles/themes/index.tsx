import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      blue?: string;
      black?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      blue?: string;
      black?: string;
    };
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

interface Props {
  children: React.ReactNode
}

const CustomerThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={darkTheme}>
    {children}
  </ThemeProvider>
)

export default CustomerThemeProvider