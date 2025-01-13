
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {  MoreHorizontal, ChevronRight, CircleCheckBig, MoveRight, MoveDown, MoveUp, CircleHelp, Circle, Timer ,Delete, CircleDashed} from "lucide-react"

import { DataTableColumnHeader } from "./column-header"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "task",
    header: "Task",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("task")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Title"
        className="capitalize"
      />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) =>
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="capitalize"
      />,
      cell: ({ row }) => {
        const status = row.getValue("status")
  
        return (
          <div className="flex items-center space-x-1">
            {status === "Backlog" && <CircleHelp className="h-3 w-4" />}
            {status === "Todo" && <Circle className="h-3 w-4" />}
            {status === "In Progress" && <Timer className="h-3 w-4" />}
            {status === "Done" && <CircleCheckBig className="h-3 w-4" />}
            {status === "Pending" && <CircleDashed className="h-3 w-4" />}
            <div className="capitalize">{status}</div>
          </div>
        )
      },
  },
  {
    accessorKey: "priority",
    header: ({ column }) =>
      <DataTableColumnHeader
        column={column}
        title="Priority"
        className="capitalize"
      />,
    cell: ({ row }) => {
      const priority = row.getValue("priority")

      return (
        <div className="flex items-center space-x-1">
          {priority === "High" && <MoveUp className="h-3 w-4" />}
          {priority === "Low" && <MoveDown className="h-3 w-4" />}
          {priority === "Medium" && <MoveRight className="h-3 w-4" />}
          <div className="capitalize">{priority}</div>
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Make a copy
            </DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Favourite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <DropdownMenuItem className="flex items-center hover:cursor-pointer">
                    Label
                    <ChevronRight className="ml-auto" />
                  </DropdownMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                  <DropdownMenuItem>Bug</DropdownMenuItem>
                  <DropdownMenuItem>Feature</DropdownMenuItem>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </DropdownMenu>
            <DropdownMenuItem onClick={() => deleteTask(task.id)}>Delete
              <Delete className="ml-auto" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]