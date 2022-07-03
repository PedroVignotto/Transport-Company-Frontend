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
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-top: 5rem;

    aside {
      img {
        width: 100%;
        height: 100%;
      }
    }

    section {
      margin-left: 0;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    margin-top: 0;

    aside {
      display: none;
    }
  }
`
