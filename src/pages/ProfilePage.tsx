import {
    Avatar, Box, Button, Container,
    Divider, List, ListItem, ListItemIcon,
    ListItemText, Typography,
    IconButton, styled,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyIcon from '@mui/icons-material/FileCopy';
import ThemeModal from '../components/profile/ThemeModal.tsx';

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    textAlign: 'center',
    height: '100vh',
    overflowY: 'auto',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 100,
    height: 100,
    margin: '0 auto',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

export default function ProfilePage() {
    return (
        <StyledContainer maxWidth='sm'>
            <Box>
                <StyledAvatar
                    alt='T'
                    src='/path/to/avatar.jpg'
                />
                <Typography variant='h5' margin='0.35em'>
                    Tony App
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                    +39 123 456 7890
                </Typography>
                <StyledButton
                    variant='contained'
                    color='primary'
                    startIcon={<EditIcon />}
                >
                    Edit Profile
                </StyledButton>
            </Box>
            <Divider sx={{ my: 3 }} />
            <List>
                <ListItem>
                    <ListItemText primary='Account' secondary='0018 1994 1293 1841' />
                    <IconButton>
                        <CopyIcon />
                    </IconButton>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Currency' secondary='EUR' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='Created on' secondary='20/06/2024' />
                </ListItem>
            </List>
            <Divider sx={{ my: 3 }} />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary=' Le mie carte' />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary='Preferiti' />
                </ListItem>
            </List>
            <Divider sx={{ my: 3 }} />
            <ThemeModal />
        </StyledContainer>
    );
}
