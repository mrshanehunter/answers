import "bootstrap/dist/css/bootstrap.min.css"
import { createGlobalStyle } from "styled-components"
import bg from "../images/bg.jpg"

const GlobalStyles = createGlobalStyle` 

:root {
  --purple: #412456;
  --gold: rgba(251, 201, 38, 0.75);
  --yellow: rgb(245,223,77);
  --green: #31ab1f;
  --white: #fefefa;
  --black: #070707;
  --shade: rgba(65, 36, 86, 0.35);
  --shaded: rgba(65, 36, 86, 0.5);
}

html {
  background-color: #412456;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  
  width: 95%;
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 0;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
}

.contentStyle {
  background: var(--shaded);
  width: 95%;
  margin: 1rem auto;
  border-radius: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.8);
}



.card {
  background: var(--shade);
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
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

.logOut {
  border: 1px solid var(--gold);
  background: var(--shaded);  
}
.log {
  color: var(--gold);
  font-size: 1.2rem;
  &:hover {
    color: var(--yellow);
  }
}

.teaser-Card-Body {
  width: 100%;
  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
}

.teaser-Card-Button {
  width: 100%;
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 75%;
  }
}

.teaser-Card-Response {
  margin: 0 auto;
  width: 250px;
  height: 100px;
  p {
    font-size: 1.25rem;
  }
}

.hiw-Card-Body {
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 25%;
    margin: 0 auto;
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}

`;

export default GlobalStyles