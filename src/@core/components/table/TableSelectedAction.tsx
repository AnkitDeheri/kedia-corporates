// @mui
import type { ReactNode } from 'react';

import type { SxProps, Theme } from '@mui/material';
import { Checkbox, Typography, Stack } from '@mui/material';


// ----------------------------------------------------------------------

interface TableSelectedActionProps {
  sx?: SxProps<Theme>;
  dense?: boolean;
  action?: ReactNode;
  rowCount: number;
  numSelected: number;
  onSelectAllRows: (checked: boolean) => void;
  [key: string]: any; // To allow additional props to be passed
}

export default function TableSelectedAction({
  dense,
  action,
  rowCount,
  numSelected,
  onSelectAllRows,
  sx,
  ...other
}: TableSelectedActionProps) {
  if (!numSelected) {
    return null;
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        pl: 1,
        pr: 2,
        top: 0,
        left: 0,
        width: 1,
        zIndex: 9,
        height: 58,
        position: 'absolute',
        bgcolor: 'primary.lighter',
        ...(dense && {
          height: 38,
        }),
        ...sx,
      }}
      {...other}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={(event) => onSelectAllRows(event.target.checked)}
      />

      <Typography
        variant="subtitle1"
        sx={{
          ml: 2,
          flexGrow: 1,
          color: 'primary.main',
          ...(dense && {
            ml: 3,
          }),
        }}
      >
        {numSelected} selected
      </Typography>

      {action && action}
    </Stack>
  );
}
