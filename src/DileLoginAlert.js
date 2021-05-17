import { html, css, LitElement } from "lit-element";
import "./escuelait-alert";
import { alertIcons } from "./icons/alerts-icons";
import "./user-avatar";

export class DileLoginAlert extends LitElement {
  static get properties() {
    return {
      invalido: { type: Boolean },
      image: { type: String },
    };
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .login-box {
        width: 320px;
        height: 420px;
        background: #004882;
        color: #fff;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 14px;
        box-sizing: border-box;
        padding: 70px 30px;
      }

      .login-box .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: -50px;
        left: calc(50% - 50px);
      }

      .login-box h1 {
        margin: 0;
        padding: 0 0 20px;
        text-align: center;
        font-size: 22px;
      }

      .login-box label {
        margin: 0;
        padding: 0;
        font-weight: bold;
        display: block;
      }

      .login-box input {
        width: 100%;
        margin-bottom: 20px;
      }

      .login-box input[type="text"],
      .login-box input[type="password"] {
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
      }

      .login-box input[type="submit"] {
        border: none;
        outline: none;
        height: 40px;
        background: #f9931d;
        color: #fff;
        font-size: 18px;
        border-radius: 20px;
      }

      .login-box input[type="submit"]:hover {
        cursor: pointer;
        background: #ffc107;
        color: #000;
      }
    `;
  }
  constructor() {
    super();
    this.invalido = false;

    this.color = "";
    this.ddd = false;
  }
  firstUpdated() {
    let body = document.querySelector("body");
    body.style.background = "#05b9e4 url(../images/bg.jpeg) repeat";
  }
  render() {
    return html`
      <div class="login-box">
        <img src="/images/logo.png" class="avatar" alt="Avatar Image" />
        <h1>Login Here</h1>
        <form>
          <!-- USERNAME INPUT -->
          <label for="username">Username</label>
          <input type="text" placeholder="Enter Username" />
          <!-- PASSWORD INPUT -->
          <label for="password">Password</label>
          <input type="password" placeholder="Enter Password" />
          <input
            type="submit"
            value="Log In"
            @click="${this.login}"
            @keypress="${this.login}"
          />
        </form>
      </div>
      ${this.invalido
        ? html` <escuelait-alert
            id="aler"
            color="${this.color}"
            img="${this.image}"
            msg="${this.mensaje}"
          ></escuelait-alert>`
        : ""}
    `;
  }
  login(e) {
    e.preventDefault();
    let keycode = e.keyCode ? e.keyCode : e.which;

    if (keycode == "13" || keycode == "1") {
      console.log("Has pulsado enter o login");
      this.invalido = true;
      this.mensaje = "ADVERTENCIA";
      this.image = alertIcons.warning;
      this.color = "#f44336";
      let alerta = this.shadowRoot.getElementById("aler");
      if (alerta != null) {
        alerta.shadowRoot.getElementById("alert").classList.remove("closed");
        alerta.shadowRoot.getElementById("alert").classList.add("alert");
      }
    }
  }
}
