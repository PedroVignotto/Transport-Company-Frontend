import { colors } from '@/application/styles'

import { darken } from 'polished'
import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2rem;
  gap: 1rem;

  aside {
    flex-basis: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    width: 100%;
    margin-left: 1rem;

    button {
      background-color: ${colors.blue};
      line-height: 2.5rem;
      color: ${colors.white};
      border-radius: 0.5rem;
      padding: 0 1rem;
      width: 60%;
      align-self: center;
      font-weight: 500;
      font-size: 1rem;
      height: 2.5rem;
      margin-top: 1.5rem;

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }

      &:hover {
        background-color: ${darken(0.1, colors.blue)};
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    aside {
      img {
        width: 100%;
        height: 100%;
      }
    }

    form {
      margin-left: 0;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;

    aside {
      display: none;
    }
  }
`
