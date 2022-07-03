import { colors } from '@/application/styles'

import styled from 'styled-components'

type Props = { active: boolean }

export const Container = styled.li<Props>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 6px -4px ${colors.blue};
  padding: 1rem;
  opacity: ${({ active }) => active ? '1' : '0.3'};

  + li {
    margin-top: 1rem;
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
`
