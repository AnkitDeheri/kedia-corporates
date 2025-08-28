// @mui
import Image from 'next/image';

import type { SxProps, Theme } from '@mui/material';
import { Typography, Stack } from '@mui/material';


// ----------------------------------------------------------------------

interface EmptyContentProps {
    sx?: SxProps<Theme>;
    img?: string;
    title: string;
    description?: string;
    [key: string]: any; // To allow additional props to be passed
}

export default function EmptyContent({ title, description, sx, ...other }: EmptyContentProps) {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: 1,
                textAlign: 'center',
                p: (theme) => theme.spacing(8, 2),
                ...sx,
            }}
            {...other}
        >
            <Image
                alt="empty content"
                src='/assets/illustrations/illustration_empty_content.svg'
                style={{ height: 240, marginBottom: '24px' }}
            />

            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>

            {description && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            )}
        </Stack>
    );
}
