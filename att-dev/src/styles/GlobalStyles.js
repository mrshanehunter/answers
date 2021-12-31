import "bootstrap/dist/css/bootstrap.min.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle` 

:root {
  --purple: #412456;
  --gold: rgba(251, 201, 38, 0.75);
  --yellow: rgb(245,223,77);
  --green: #31ab1f;
  --white: #fefefa;
  --black: #070707;
  --lpurple: #dc68f5;
  --shade: rgba(65, 36, 86, 0.35);
  --shaded: rgba(65, 36, 86, 0.5);
}

html {
  background-color: #412456;
}

body {
  background: transparent;
  font-size: 1rem;
  color: var(--gold);
  a {
    color: var(--white);
    &:hover {
      color: var(--gold);
    }
  }
}

h3, h4, h5 {
  color: var(--gold);
}

p strong {
  color: var(--gold);
}

p {
  color: var(--white);
}

img {
  border-style: none;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.fullScreen {
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.borderStyle {
  background: var(--shaded);
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 0;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
}

.contentStyle {
  background: var(--shaded);
  width: 90%;
  flex: 1;
  margin: 1rem auto;
  border-radius: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}



.card {
  
  max-width: 600px;
  background: var(--shade);
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}

.card-body {
  min-width: 325px;
}

.link {
  font-size: 1rem;
}

.form-group input {
  background: var(--shaded);
  border: 0.05rem solid var(--gold);
  color: var(--gold);
}



.btn {
  margin: 2rem auto 0;
  border-radius: 1rem;
  border: thin solid var(--gold);
  background: var(--shaded);
  color: var(--gold);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  &:hover {
    background: var(--green);
    border: thin solid var(--purple);
  }
}

.extLink {
  a {
  width: 100%;
  font-size: 1rem;
  color: var(--gold);
  &:hover {
    text-decoration: none;
    color: var(--white);
  }
}
}


.log {
  margin: 0 auto;
  color: var(--gold);
  font-size: 1.2rem;
  &:hover {
    color: var(--yellow);
  }
  a {
    text-decoration: none;
  }
}

.btn-link {
  text-decoration: none;
  font-size: 1.2rem;
}


.hiw-Card-Body {
  width: 100%;
  a {
    text-decoration: none;
  }
 
  @media (min-width: 768px) {
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
}

.faqh3 {
  font-size: 1.2rem;
}

.thxbtn {
  margin-left: 25%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.tph {
  h3 {
    font-size: 1.2rem;
  }
}

.terms-privacy {
  overflow: auto;
  .card-title {
    font-size: 1rem;
  }
}

.cf {
  
  h3 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
  label {
    color: var(--gold);
    width: 100%;
    font-style: bold;
    font-size: 1.5rem;
    margin-left: 25%;
    @media (max-width: 546px) {
      width: 100%;
      margin-left: 0;
    }
  }
  input, textarea {
    background: var(--shade);
    border: 0.05rem solid var(--gold);
    color: var(--gold);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    width: 50%;
    :focus {
      background: var(--black);
      color: var(--white);
      font-size: 1.5rem;
    }
    @media (max-width: 546px) {
      width: 100%;
      margin-left: 0;
    }
  }
  button {
    border-style: none;
    background: var(--purple);
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 50%;
    margin-left: 25%;
    :hover {
      color: var(--lpurple);
      background: var(--purple);
    }
    @media (max-width: 546px) {
      width: 100%;
      margin-left: 0;
    }
  }
}

.t-p {
  font-size: 0.8rem;
  margin: 0.35rem;
  padding: 0.35rem;
  ol {
    margin: 0.35rem;
    padding: 0.5rem;
  }
  li {
    margin: 0.35rem;
    padding: 0.5rem;
  }
  @media (min-width: 576px) {
    font-size: 1.1rem;
    margin: 0.5rem;
    padding: 0.5rem;
    ol {
      margin: 0.75rem;
      padding-left: 0.75rem;
    }
    li {
      margin: 0.5rem;
      padding-left: 0.5rem;
     
    }
  }
}

.tandccheck p {
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--gold);
  a {
    color: var(--gold);
    text-decoration: underline;
  }
}

.addressCard {
  border: 0.05rem solid var(--gold);
}

.address p {
  font-size: 1rem;
  color: var(--gold);
  text-align: center;
}

.card-text {
  margin-bottom: 0.25rem;
}

.teaser-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.teaser-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.teaser-container div {
  display: flex;
  margin-top: .75rem;
}

.teaser-container div h3 {
  font-size: 1.2rem;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}

.teaser-container div h4 {
  font-size: 1.2rem;
}

.teaser-container div p {
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.teaser-container div .gatsby-image-wrapper {
  width: 50%;
  height: auto;
  justify-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  border: 0.05rem solid var(--gold);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
 
}

.teaser-button-container {
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
}


.teaser-button-container button {
  width: 15rem;
  margin: 2rem auto 0;
  border-radius: 1rem;
  border: thin solid var(--gold);
  background: var(--shaded);
  color: var(--gold);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  &:hover {
    background: var(--green);
    color: var(--white);
    border: thin solid var(--purple);
  }
 }

.hiw-btn {
  width: 15rem;
  margin: 0 auto;
  padding: 0.375rem 0.8rem;
  border-radius: 1rem;
  border: 0.015rem solid var(--gold);
  background: var(--shaded);
  color: var(--gold);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  text-decoration: none;
  &:hover {
    background: var(--green);
    color: var(--white);
    border: 0.015rem solid var(--lpurple);
  }
}




`

export default GlobalStyles
