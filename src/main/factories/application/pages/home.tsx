import { makeListOrderByTrackingCode } from '@/main/factories/domain/use-cases'
import { Home } from '@/application/pages'

import React from 'react'

export const makeHome: React.FC = () =>
  (<Home listOrderByTrackingCode={makeListOrderByTrackingCode()} />)
