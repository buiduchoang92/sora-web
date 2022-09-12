// form
import { FormProvider as Form } from 'react-hook-form'

// ----------------------------------------------------------------------

interface FormProviderProps {
  children: React.ReactNode
  methods: object
  onSubmit: () => void
}
export default function FormProvider({ children, onSubmit, methods }: FormProviderProps) {
  return (
    <Form {...(methods as any)}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}
