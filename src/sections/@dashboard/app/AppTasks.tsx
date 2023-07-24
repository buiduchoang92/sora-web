import { ReactNode, useState } from 'react'
// form
import { useForm, Controller } from 'react-hook-form'
// @mui
import { Card, Stack, Divider, Checkbox, MenuItem, IconButton, CardHeader, FormControlLabel } from '@mui/material'
// components
import Iconify from '../../../components/Iconify'
import MenuPopover from '../../../components/MenuPopover'

// ----------------------------------------------------------------------

interface AppTasksProps {
  title: string
  subheader?: string
  list: List[]
}
interface List {
  id: string
  label: string
}

export default function AppTasks({ title, subheader, list, ...other }: AppTasksProps) {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2'],
    },
  })

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Controller
        name='taskCompleted'
        control={control}
        render={({ field }) => {
          const onSelected = (task: string) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task]

          return (
            <>
              {list.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  checked={field.value.includes(task.id)}
                  onChange={() => field.onChange(onSelected(task.id))}
                />
              ))}
            </>
          )
        }}
      />
    </Card>
  )
}

// ----------------------------------------------------------------------

interface TaskItemProps {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  task: List
}

function TaskItem({ task, checked, onChange }: TaskItemProps) {
  const [open, setOpen] = useState<null | HTMLButtonElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setOpen(null)
  }

  const handleMarkComplete = () => {
    handleCloseMenu()
    console.log('MARK COMPLETE', task.id)
  }

  const handleShare = () => {
    handleCloseMenu()
    console.log('SHARE', task.id)
  }

  const handleEdit = () => {
    handleCloseMenu()
    console.log('EDIT', task.id)
  }

  const handleDelete = () => {
    handleCloseMenu()
    console.log('DELETE', task.id)
  }

  return (
    <Stack
      direction='row'
      sx={{
        px: 2,
        py: 0.75,
        ...(checked && {
          color: 'text.disabled',
          textDecoration: 'line-through',
        }),
      }}
    >
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} />}
        label={task.label}
        sx={{ flexGrow: 1, m: 0 }}
      />

      <MoreMenuButton
        open={Boolean(open)}
        onClose={handleCloseMenu}
        onOpen={handleOpenMenu}
        actions={
          <>
            <MenuItem onClick={handleMarkComplete}>
              <Iconify icon={'eva:checkmark-circle-2-fill'} />
              Mark Complete
            </MenuItem>

            <MenuItem onClick={handleEdit}>
              <Iconify icon={'eva:edit-fill'} />
              Edit
            </MenuItem>

            <MenuItem onClick={handleShare}>
              <Iconify icon={'eva:share-fill'} />
              Share
            </MenuItem>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} />
              Delete
            </MenuItem>
          </>
        }
      />
    </Stack>
  )
}

// ----------------------------------------------------------------------

interface MoreMenuButtonProps {
  actions: ReactNode
  onClose: React.MouseEventHandler<Element>
  onOpen: React.MouseEventHandler<Element>
  open: boolean
}

function MoreMenuButton({ actions, open, onOpen, onClose }: MoreMenuButtonProps) {
  return (
    <>
      <IconButton size='large' color='inherit' sx={{ opacity: 0.48 }} onClick={onOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow='right-top'
        sx={{
          mt: -0.5,
          width: 'auto',
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {actions}
      </MenuPopover>
    </>
  )
}
