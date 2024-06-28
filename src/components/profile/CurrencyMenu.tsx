import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function CurrencyMenuItem() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = React.useState<string>(() => {
        return localStorage.getItem('selectedCurrency') || 'EUR';
    });
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (item: string) => {
        setSelectedItem(item);
        localStorage.setItem('selectedCurrency', item);
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {selectedItem}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(selectedItem)}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => handleClose('EUR')}>EUR</MenuItem>
                <MenuItem onClick={() => handleClose('USD')}>USD</MenuItem>
                <MenuItem onClick={() => handleClose('GBP')}>GBP</MenuItem>
                <MenuItem onClick={() => handleClose('CNY')}>CNY</MenuItem>
                <MenuItem onClick={() => handleClose('JPY')}>JPY</MenuItem>
                <MenuItem onClick={() => handleClose('CHF')}>CHF</MenuItem>
                <MenuItem onClick={() => handleClose('AED')}>AED</MenuItem>
            </Menu>
        </div>
    );
}