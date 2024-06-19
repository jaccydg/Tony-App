import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

export default function TextInput(props: { value: string, error: boolean, handleChange: ChangeEventHandler, label: string, type: string }) {
    const {
        value,
        error,
        handleChange,
        label,
        type,
    } = props;
    return (
        <TextField
            variant='outlined'
            fullWidth
            label={label}
            error={error}
            value={value}
            type={type || 'text'}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
        />
    );
}
