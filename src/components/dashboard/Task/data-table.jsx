
import * as React from "react"
import { Input } from "@/components/ui/input"
import { columns } from "./columns"
import { DataTablePagination } from "./pegination"
import { DataTableViewOptions } from "./data-view"
import MultiSelectFilter from "./filter"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

const data = [
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Todo",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Pending",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Backlog",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Todo",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "In Progress",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Backlog",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Done",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "m5gr84i9",
    priority: "High",
    status: "Done",
    task: "TASK-8782",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "3u1reuv4",
    priority: "Low",
    status: "Backlog",
    task: "TASK-4782",
    title: "Refactor fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "dhUioe9j",
    priority: "High",
    status: "Backlog",
    task: "TASK-8382",
    title: "Create a fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "fkjo90ew",
    priority: "Medium",
    status: "Done",
    task: "TASK-8452",
    title: "Delete fuction to get the notification data from the backend when the user is logged in",
  },
  {
    id: "mGcr498i",
    priority: "High",
    status: "In progress",
    task: "TASK-7382",
    title: "Update fuction to get the notification data from the backend when the user is logged in",
  },
]

export function DataTableDemo() {

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [statusFilter, setStatusFilter] = React.useState([]);
  const [priorityFilter, setPriorityFilter] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const handleStatusChange = (value) => {
    setStatusFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  
    table.getColumn("status")?.setFilterValue((prev = []) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  
  const handlePriorityChange = (value) => {
    setPriorityFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  
    table.getColumn("priority")?.setFilterValue((prev = []) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <MultiSelectFilter
          label="Status"
          options={["Backlog", "Todo", "In Progress", "Done"]}
          selected={statusFilter}
          onChange={handleStatusChange}
        />

        <MultiSelectFilter
          label="Priority"
          options={["High", "Medium", "Low"]}
          selected={priorityFilter}
          onChange={handlePriorityChange}
        />

        <DataTableViewOptions table={table} />


      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />

    </div>
  )
}
