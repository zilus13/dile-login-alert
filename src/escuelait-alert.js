import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class EscuelaItAlert extends LitElement {
    static get properties() {
        return {
            msg: { type: String },
            img: { type: String },
            color: { type: String },
            closed: { type: Boolean },
        };
    }
    static get styles() {
        return css`
            :host {
                display: block;
            }
            .alert {
                padding: 20px;
                background-color: var(--alert-background-color, #f44336);
                color: white;
            }

            .closebtn {
                margin-left: 15px;
                color: white;
                font-weight: bold;
                float: right;
                font-size: 22px;
                line-height: 20px;
                cursor: pointer;
                transition: 0.3s;
            }

            path {
                fill: #fff;
            }
            p {
                padding: 0px;
                margin: 0px;
            }
            .icon {
                margin-left: 40px;
            }
            .closebtn:hover {
                color: black;
            }
            .closed {
                display: none;
            }
        `;
    }
    constructor() {
        super();
        this.closed = false;
    }
    render() {
        return this.color ? this.warning : this.alert;
    }
    get warning() {
        return html` <div
            id="alert"
            class="${this.closed ? 'closed' : 'alert'}"
            style=" background-color:${this.color}"
        >
            <span class=" closebtn" @click="${this.close}"> &times; </span>
            ${unsafeHTML(this.img)}
            <span class="icon"> ${this.msg ? this.msg : 'Error'}</span>
        </div>`;
    }
    get alert() {
        return html` <div id="alert" class=""${this.closed ? 'closed' : 'alert'}"" style=" background-color:${
            this.color
        }">
            <span class="closebtn" @click="${this.close}"> &times; </span>
            ${unsafeHTML(this.img)}
            <span class="icon"> ${this.msg ? this.msg : 'Error'}</span>
        </div>`;
    }

    close() {
        console.log('wedwdwdqw', this.closed);
        this.closed = true;
        this.shadowRoot.getElementById('alert').classList.add('closed');
        this.shadowRoot.getElementById('alert').classList.remove('alert');
    }
}
customElements.define('escuelait-alert', EscuelaItAlert);
