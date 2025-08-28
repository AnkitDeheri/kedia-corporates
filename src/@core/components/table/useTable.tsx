import { useState, useCallback } from 'react';

interface UseTableProps {
  defaultDense?: boolean;
  defaultOrderBy?: string;
  defaultOrder?: 'asc' | 'desc';
  defaultCurrentPage?: number;
  defaultRowsPerPage?: number;
  defaultSelected?: string[];
}

interface UseTableReturn {
  dense: boolean;
  order: 'asc' | 'desc';
  page: number;
  orderBy: string;
  rowsPerPage: number;
  selected: string[];
  onSelectRow: (id: string) => void;
  onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
  onSort: (id: string) => void;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setDense: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

// ----------------------------------------------------------------------

export default function useTable(props: UseTableProps = {}): UseTableReturn {
  const [dense, setDense] = useState<boolean>(!!props.defaultDense);
  const [orderBy, setOrderBy] = useState<string>(props.defaultOrderBy || 'name');
  const [order, setOrder] = useState<'asc' | 'desc'>(props.defaultOrder || 'asc');
  const [page, setPage] = useState<number>(props.defaultCurrentPage || 0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(props.defaultRowsPerPage || 5);
  const [selected, setSelected] = useState<string[]>(props.defaultSelected || []);

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';

      if (id !== '') {
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(id);
      }
    },
    [order, orderBy]
  );

  const onSelectRow = useCallback(
    (id: string) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    },
    [selected]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    setSelected(checked ? newSelecteds : []);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  }, []);

  const onChangeDense = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  }, []);

  return {
    dense,
    order,
    page,
    orderBy,
    rowsPerPage,
    selected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangePage,
    onChangeDense,
    onChangeRowsPerPage,
    setPage,
    setDense,
    setOrder,
    setOrderBy,
    setSelected,
    setRowsPerPage,
  };
}
