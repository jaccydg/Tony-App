export const getCustomTheme = (themeMode: string) => {
    const light = themeMode === 'light';
    const theme = {
        palette: {
            mode: themeMode,
            background: {
                default: light ? '#FFFFFF' : '#181818',
                paper: light ? '#FFFFFF' : '#181818',
                grey: light ? '#F5F5F5' : '#2A2A2A',
            },
            primary: {
                main: '#02D13E',
            },
            secondary: {
                main: '#5DB075',
            },
            warning: {
                main: '#F7D448',
            },
            textPrimary: {
                main: '#5DB075',
            },
            white: {
                main: '#FAFAFA',
            },
            error: {
                main: '#F7484E',
            },
            info: {
                main: '#4871F7',
            },
            ...(light
                ? { text: { primary: '#151515' } }
                : { text: { primary: '#FAFAFA' } }
            ),
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
                xxl: 2048,
            },
        },
        typography: {
            fontFamily: 'Arial',
            h4: {
                fontWeight: '300',
            },
            h5: {
                fontWeight: '300',
            },
            h6: {
                fontWeight: '300',
            },
            subtitle1: {
                fontWeight: '400',
            },
            subtitle2: {
                fontWeight: '500',
            },
            body1: {
                fontWeight: '400',
            },
            body2: {
                fontWeight: '400',
            },
            button: {
                fontFamily: 'Arial',
                fontWeight: '500',
                // letterSpacing: '1.44px',
                borderRadius: '18px',
            },
            caption: {
                fontWeight: '400',
            },
            overline: {
                fontFamily: 'Arial',
                fontWeight: '300',
                textTransform: 'uppercase',
                // letterSpacing: '1.44px',
            },
        },
        components: {
            MuiTextField: {
                defaultProps: {
                    InputProps: {
                        spellCheck: 'false',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '32px',
                        // padding: '8px 16px',
                        textTransform: 'none',
                    },
                },
            },
            MuiFromControl: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontSize: '14px',
                        letterSpacing: '1.2px',
                        fontWeight: 400,
                        color: '#4871F7',
                    },
                },
            },
        },
    };
    return theme;
};

export const getTransparentBgColor = (mode: string) => {
    if (mode === 'light') return '#f5f5f4D9';
    return '#111111D9';
};
