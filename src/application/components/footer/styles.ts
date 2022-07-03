import { colors } from '@/application/styles'

import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  background: ${colors.black};
  border-radius: 1rem 1rem 0 0;
  padding: 0 2rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${colors.white};
  }

  div {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border-radius: 100%;
      width: 2rem;
      height: 2rem;
      transition: 0.4s;

      + button {
        margin-left: 0.25rem;
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
        color: ${colors.white}
      }

      :hover {
        background: ${lighten(0.1, colors.black)};
      }
    }
  }

  @media (max-width: 315px) {
    flex-direction: column-reverse;
    height: 6rem;
    padding: 1rem;
  }
`
