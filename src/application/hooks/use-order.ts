import { OrderContext, ContextProps } from '@/application/contexts'

import { useContext } from 'react'

export const useOrder = (): ContextProps => useContext(OrderContext)
