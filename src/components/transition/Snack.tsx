import React from 'react'
// notistack
import { VariantType, useSnackbar } from 'notistack'

interface SnackType {
  message: string
  variant: VariantType
}

function Snack({ message, variant }: SnackType) {
  const { enqueueSnackbar } = useSnackbar()
  const handle = () => enqueueSnackbar(message, { variant: variant })
  React.useEffect(() => {
    handle()
  }, [])
  return null
}

export default React.memo(Snack)
