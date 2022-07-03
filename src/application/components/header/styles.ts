import { colors } from '@/application/styles'

import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  background: ${colors.black};
  border-radius: 0 0 1rem 1rem;
  padding: 0 2rem;

  h1 {
    color: ${colors.white};
    line-height: 4rem;
    font-weight: 700;
    letter-spacing: 2px;
  }

  nav {
    a {
      color: ${colors.white};
      font-weight: 500;
      text-transform: lowercase;
      font-size: 1rem;
      letter-spacing: 1px;

      :hover {
        color: ${darken(0.1, colors.white)};
      }
    }
  }

  @media (max-width: 400px) {
    justify-content: flex-end;

    h1 {
      display: none;
    }
  }
`
