import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Corporate Blue
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#475569', // Slate Gray
      light: '#64748b',
      dark: '#334155',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Very Light Slate background for the app body
      paper: '#ffffff',   // Clean white for cards and paper elements
    },
    text: {
      primary: '#0f172a', // Near black for strong readability
      secondary: '#475569', // Slate gray for subtitles
    },
    divider: '#e2e8f0', // Subtle light gray for borders
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, color: '#0f172a', letterSpacing: '-0.025em' },
    h2: { fontWeight: 700, color: '#0f172a', letterSpacing: '-0.025em' },
    h3: { fontWeight: 600, color: '#0f172a' },
    h4: { fontWeight: 600, color: '#1e293b' },
    h5: { fontWeight: 600, color: '#1e293b' },
    h6: { fontWeight: 600, color: '#334155' },
    body1: { color: '#334155', lineHeight: 1.6 },
    body2: { color: '#475569', lineHeight: 1.6 },
    subtitle1: { color: '#2563eb', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8, // Standard, professional rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Professional capitalization (Sentence case)
          fontWeight: 600,
          boxShadow: 'none', // Flat buttons are more modern
          padding: '8px 16px',
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
            backgroundColor: '#f1f5f9',
          },
        },
      },
      defaultProps: {
        disableElevation: true, // Flat design by default
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s',
          '&:hover': {
             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
             borderColor: '#cbd5e1'
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#ffffff',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            borderRadius: 8,
            transition: 'box-shadow 0.2s ease-in-out',
            '& fieldset': {
              borderColor: '#cbd5e1',
            },
            '&:hover fieldset': {
              borderColor: '#94a3b8',
            },
            '&.Mui-focused': {
               boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.2)', // Professional blue focus ring
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2563eb',
              borderWidth: '1px',
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8fafc',
          borderBottom: '2px solid #e2e8f0',
          '& th': {
            color: '#475569',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            padding: '12px 16px',
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e2e8f0',
          color: '#334155',
        }
      }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#ffffff',
                color: '#0f172a',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                borderBottom: '1px solid #e2e8f0'
            }
        }
    }
  },
});

export default theme;
