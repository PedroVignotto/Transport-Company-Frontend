import { makeHome } from '@/main/factories/application/pages/home'
import { Router } from '@/main/router'

import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(<Router Home={makeHome} />, document.getElementById('root'))
