import { colors } from '@/application/styles'

import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 2rem;
  gap: 1rem;

  aside {
    flex-basis: 65%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 35%;
    margin-left: 1rem;

    h2 {
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 1.5px;
    }

    ul {
      width: 100%;
      margin-top: 3rem;

      li {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 0.25rem;
        box-shadow: 0px 4px 6px -4px ${colors.blue};
        padding: 1rem;

        + li {
          margin-top: 1rem;
          opacity: 0.3;
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: ${colors.blue};
        }

        span {
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 1px;
          margin-left: 1rem;
        }

        ::after {
          content: '';
          height: 100%;
          border-radius: 5px;
          width: 5px;
          position: absolute;
          left: 0;
          top: 0;
          background: ${colors.blue};
        }
      }
    }
  }
`
