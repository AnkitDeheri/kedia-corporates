import type { SxProps, Theme } from '@mui/material';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';


import colorSchemes from '@/@core/theme/colorSchemes';

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
} as const;

// Define the type for each head label item
interface HeadLabel {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  width?: string | number;
  minWidth?: string | number;
}

// Define the props for TableHeadCustom
interface TableHeadCustomProps {
  sx?: SxProps<Theme>;
  onSort?: (id: string) => void;
  orderBy?: string;
  headLabel: HeadLabel[];
  rowCount?: number;
  numSelected?: number;
  onSelectAllRows?: (checked: boolean) => void;
  order?: 'asc' | 'desc';
}

export default function TableHeadCustom({
  order = 'asc',
  orderBy = '',
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}: TableHeadCustomProps) {


  const colors = colorSchemes('default').light.palette;


  return (
    <TableHead sx={{ background: colors.primary.lightOpacity, ...sx }}>
      <TableRow>
        {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth, color: colors.primary.main, }}
          >
            {onSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onSort(headCell.id)}
                sx={{ textTransform: 'capitalize' }}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box sx={{ ...visuallyHidden }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
