import { TableRow, TableCell } from '@mui/material';

// ----------------------------------------------------------------------
interface TableEmptyProps {
  emptyRows?: number;
  height: number;
}

export default function TableEmptyRows(props: TableEmptyProps) {
  const { emptyRows, height } = props;

  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
