import { MenuItem, Switch } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import CustomTextField from '@/@core/components/mui/TextField';

// Define the props interface
interface TablePaginationComponentProps {
  pageIndex: number;
  pageSize: number;
  totalRows: number;
  onPageChange: (page: number) => void; // Function to handle page change
  handleChangeRowsPerPage: (event: React.ChangeEvent<{ value: unknown }>) => void; // Function to handle rows per page change
  showBorder?: boolean; // Optional prop
  showpadding?: boolean; // Optional prop
  onChangeDense?: any; // Function to
  dense: boolean; // Optional prop
}

const TablePaginationComponent: React.FC<TablePaginationComponentProps> = ({
  pageIndex,
  pageSize,
  totalRows,
  onPageChange,
  handleChangeRowsPerPage,
  showBorder = true,
  showpadding = true,
  onChangeDense,
  dense
}) => {
  return (
    <div className={`flex justify-between items-center flex-wrap ${showpadding ? 'pli-6' : ''} ${showBorder ? 'border-bs bs-auto' : ''} plb-[12.5px] gap-2`}>
      <div className='flex items-center gap-2'>
        <Switch
          checked={dense} onChange={onChangeDense}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <div className='flex items-center gap-2'>
        <Typography className='hidden sm:block'>Show</Typography>
        <CustomTextField
          select
          value={pageSize}
          onChange={handleChangeRowsPerPage}
          className='is-[80px]'
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={500}>500</MenuItem>
        </CustomTextField>

        <Pagination
          shape='rounded'
          color='primary'
          variant='tonal'
          count={Math.ceil(totalRows / pageSize)}
          page={pageIndex} // Pagination expects 1-based index
          onChange={(_, page) => onPageChange(page - 1)} // Convert to 0-based index for onPageChange
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}

export default TablePaginationComponent;
