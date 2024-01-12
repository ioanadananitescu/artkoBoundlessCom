'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthBar from '../header/authBar';

export default function ButtonAppBar() {
    const theme = createTheme({
        palette: {
          background: {
            paper: '#fff',
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
          success: {
            dark: '#009688',
          },
        },
    });
    
  return (
    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000000"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'text.primary' }}>
            Menu
          </Typography>
                  
                  <AuthBar/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}