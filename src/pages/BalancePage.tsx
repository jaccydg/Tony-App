import { Typography, Box, Button, Avatar, MenuItem, Select, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BalancePage = () => {
    const theme = useTheme();
    const selectedCurrency = localStorage.getItem('selectedCurrency') || 'USD $';
    const [name, setName] = useState(localStorage.getItem('userName') || 'Tony App');
    const navigate = useNavigate();

    return (
        <Box sx={{ padding: theme.spacing(2) }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginBottom: theme.spacing(2) }}>
                <Box display="flex" alignItems="center">
                    <Avatar
                        alt={name}
                        src="path/to/profile-picture.jpg"
                        sx={{ marginRight: theme.spacing(1) }}
                        onClick={() => navigate('/profile')}
                    />
                    <Box>
                        <Typography variant="body1">Hey, {name}</Typography>
                        <Typography variant="body2" color="textSecondary">Il tuo portafoglio</Typography>
                    </Box>
                </Box>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)',
                    borderRadius: theme.shape.borderRadius * 2,
                    padding: theme.spacing(3),
                    color: theme.palette.common.white,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)'
                }}
            >
                <Typography variant="h2" sx={{ color: 'white' }}>
                    {selectedCurrency} 347,84
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around" sx={{ marginBottom: theme.spacing(2) }}>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<ArrowDownwardIcon />}
                    sx={{ borderRadius: '50px', minWidth: '100px' }}
                >
                    Ricarica
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<ArrowUpwardIcon />}
                    sx={{ borderRadius: '50px', minWidth: '100px' }}
                >
                    Preleva
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<SyncAltIcon />}
                    sx={{ borderRadius: '50px', minWidth: '100px' }}
                >
                    Trasferisci
                </Button>
            </Box>
            <Box
                sx={{
                    background: theme.palette.grey[900],
                    borderRadius: theme.shape.borderRadius,
                    padding: theme.spacing(2),
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: theme.spacing(2) }}>
                    <Typography variant="h5" >Transazioni</Typography>
                    <Select
                        defaultValue="Dicembre"
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                            '.MuiSvgIcon-root': {
                                fill: theme.palette.text.primary,
                            },
                        }}
                    >
                        <MenuItem value="Dicembre">Dicembre</MenuItem>
                        <MenuItem value="Novembre">Novembre</MenuItem>
                        <MenuItem value="Ottobre">Ottobre</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="Agosto">Agosto</MenuItem>
                        <MenuItem value="Luglio">Luglio</MenuItem>
                        <MenuItem value="Giugno">Giugno</MenuItem>
                        <MenuItem value="Maggio">Maggio</MenuItem>
                        <MenuItem value="Aprile">Aprile</MenuItem>
                        <MenuItem value="Marzo">Marzo</MenuItem>
                        <MenuItem value="Febbraio">Febbraio</MenuItem>
                        <MenuItem value="Gennaio">Gennaio</MenuItem>
                    </Select>
                </Box>
                <Box display="flex" alignItems="center" sx={{ marginBottom: theme.spacing(2.5) }}>
                    <Avatar alt="Ricarica Aldi" sx={{ marginRight: theme.spacing(2) }} />
                    <Box flexGrow={1}>
                        <Typography variant="body1">Ricarica Aldi</Typography>
                        <Typography variant="body2" color="textSecondary">Pagato</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body1" color="error.main">{selectedCurrency}-42,35</Typography>
                        <Typography variant="body2" color="textSecondary">Dic, 25 15:25</Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" sx={{ marginBottom: theme.spacing(2.5) }}>
                    <Avatar alt="Ricarica Università" sx={{ marginRight: theme.spacing(2) }} />
                    <Box flexGrow={1}>
                        <Typography variant="body1">Ricarica Università</Typography>
                        <Typography variant="body2" color="textSecondary">Pagato</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body1" color="error.main">{selectedCurrency}-31.97</Typography>
                        <Typography variant="body2" color="textSecondary">Dic, 19 11:18 </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BalancePage;