import { colors } from '@/application/styles'

import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  flex-grow: 1;
  margin: 0 auto;
`

export const Header = styled.header`
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
`

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
`

export const Footer = styled.footer`
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
`
