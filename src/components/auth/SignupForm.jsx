import {
    Button, Box, Grid,
    useMediaQuery, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { dispatchLogin } from '../../actions/auth';
import { toLoginPage } from '../../actions/navigation';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import FormLogo from './FormLogo';

export default function LoginForm() {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmError, setConfirmError] = useState(false);

    const handleClickLogin = () => {
        setUsernameError(!username);
        setEmailError(!email);
        setPasswordError(!password || password !== confirm);
        setConfirmError(!confirm || password !== confirm);
        if (username && email && password && confirm) {
            dispatchLogin({ username, password });
        }
    };
    const handleChangeUsername = (event) => setUsername(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeConfirm = (event) => setConfirm(event.target.value);
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
                            <TextInput
                                value={email}
                                error={emailError}
                                handleChange={handleChangeEmail}
                                label='Email'
                                type='email'
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
                        <Grid item xs={12}>
                            <PasswordInput
                                value={confirm}
                                error={confirmError}
                                handleChange={handleChangeConfirm}
                                label='Confirm Password'
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
                            Sign Up
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
                    onClick={toLoginPage}
                >
                    Already registered?
                </Button>
            </Box>
        </Box>
    );
}
