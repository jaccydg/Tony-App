import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    FormControl, IconButton, InputAdornment,
    InputLabel, OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

export default function PasswordInput(props) {
    const {
        value,
        error,
        handleChange,
        label,
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl sx={{ width: '100%' }} variant='outlined'>
            <InputLabel
                shrink
                htmlFor={label.toLowerCase().replace(' ', '-')}
                error={error}
            >
                {label}
            </InputLabel>
            <OutlinedInput
                id={label.toLowerCase().replace(' ', '-')}
                variant='outlined'
                fullWidth
                notched
                label={label}
                type={showPassword ? 'text' : 'password'}
                error={error}
                value={value}
                onChange={handleChange}
                endAdornment={(
                    <InputAdornment position='end' sx={{ mr: 1 }}>
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge='end'
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )}
            />
        </FormControl>
    );
}
