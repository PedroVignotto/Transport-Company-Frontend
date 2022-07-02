import { Order } from '@/domain/models'

import React, { createContext, ReactNode, useState } from 'react'

export type ContextProps = { order: Order | undefined, setOrder: React.Dispatch<React.SetStateAction<Order | undefined>> }

type ProviderProps = { children: ReactNode }

export const OrderContext = createContext<ContextProps>(null as any)

export const OrderProvider = ({ children }: ProviderProps): any => {
  const [order, setOrder] = useState<Order>()
  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>
}
