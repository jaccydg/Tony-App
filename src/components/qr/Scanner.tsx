// @ts-ignore
import QrReader from 'react-qr-scanner';
import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { navBarHeight } from '../../helpers/Layout.ts';

export default function Scanner() {
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
    const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
    const [frontCamera, setFrontCamera] = useState(false);
    const [mirrorCamera, setMirrorCamera] = useState(false);

    const handleScan = (data: any) => {
        if (data) alert(data.text);
    };
    const handleError = (err: any) => {
        console.error(err);
    };

    const load = async () => {
        const devs = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devs.filter((device) => device.kind === 'videoinput').slice(0, 2);
        setDevices(videoDevices);
        setDeviceId(videoDevices[videoDevices.length - 1].deviceId);
        setMirrorCamera(videoDevices[videoDevices.length - 1].label.toLowerCase().includes('front'));
    };

    const toggleCameraSide = () => {
        setFrontCamera(!frontCamera);
        const newDevice = frontCamera ? devices[1] : devices[0];
        setDeviceId(newDevice.deviceId);
        setMirrorCamera(newDevice.label.toLowerCase().includes('front'));
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <Box
            height={`${window.innerHeight - navBarHeight}px`}
            width='100vw'
            overflow='hidden'
            p={0}
        >
            <QrReader
                key={deviceId}
                delay={100}
                onError={handleError}
                onScan={handleScan}
                constraints={deviceId && { audio: false, video: { deviceId } }}
                style={{
                    'margin-left': '50%',
                    height: `${window.innerHeight - navBarHeight}px`,
                    transform: `translateX(-50%) ${mirrorCamera ? 'rotateY(180deg)' : ''}`,
                }}
            />
            {
                devices.length > 1 && (
                    <IconButton
                        onClick={toggleCameraSide}
                        sx={{
                            position: 'absolute',
                            bottom: navBarHeight + 5,
                            right: 5,
                        }}
                    >
                        <CameraswitchIcon sx={{ fontSize: 50 }} color='primary' />
                    </IconButton>
                )
            }
        </Box>
    );
}
