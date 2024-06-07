import {
    Button, Box, Grid,
    useMediaQuery, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { dispatchLogin } from '../../actions/auth';
import { toSignupPage } from '../../actions/navigation';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import FormLogo from './FormLogo';

export default function LoginForm() {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleClickLogin = () => {
        setUsernameError(!username);
        setPasswordError(!password);
        if (username && password) {
            dispatchLogin({ username, password });
        }
    };
    const handleChangeUsername = (event) => setUsername(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleFormSubmit = (event) => event.preventDefault();

    return (
        <Box sx={{
            width: desktop ? 540 : '95%',
        }}
        >
            <FormLogo />
            <Box mt={5}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextInput
                                value={username}
                                error={usernameError}
                                handleChange={handleChangeUsername}
                                label='Username'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <PasswordInput
                                value={password}
                                error={passwordError}
                                handleChange={handleChangePassword}
                                label='Password'
                            />
                        </Grid>
                    </Grid>
                    <Box mt={5} minHeight={50}>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={handleClickLogin}
                            type='submit'
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
            <Box
                width='100vw'
                left={0}
                bottom={10}
                position='fixed'
                textAlign='center'
            >
                <Button
                    color='textPrimary'
                    onClick={toSignupPage}
                >
                    Don't have an account?
                </Button>
            </Box>
        </Box>
    );
}
