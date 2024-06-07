import { TextField } from '@mui/material';

export default function TextInput(props) {
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
