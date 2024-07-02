import React, { useState } from 'react';
import { Button, TextField, Modal, Box } from '@mui/material';
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
        setModalOpen(false);
    };

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Button variant="contained" onClick={() => setModalOpen(true)} style={{marginTop: '1em', marginBottom: '0.5em'}}>
                Modifica Nome
                <EditIcon style={{marginLeft: '0.25em', fontSize: '1.25rem'}} />
            </Button>
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