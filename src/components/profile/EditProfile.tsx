import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface EditProfileProps {
    name: string;
    onSave: (newName: string) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ name, onSave }) => {
    const [newName, setNewName] = useState(name);
    const [modalOpen, setModalOpen] = useState(false);

    const handleSave = () => {
        onSave(newName);
        localStorage.setItem('userName', newName);
        setModalOpen(false);
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        outline: 'none'
    };

    return (
        <div>
            <Typography variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 2 }}>
                {name}
                <EditIcon onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }} />
            </Typography>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <h2>Modifica Nome</h2>
                    <TextField
                        fullWidth
                        label="Nome"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => setModalOpen(false)} sx={{ mr: 1 }}>
                            Annulla
                        </Button>
                        <Button variant="contained" onClick={handleSave}>
                            Salva
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default EditProfile;