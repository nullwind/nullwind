import Nullstack, { NullstackClientContext } from "nullstack";

import { IconXCircle } from "nullstack-feather-icons";

import InputBase from "./InputBase";
import theme from "../../theme";
import Badge from "../Badge";

interface EmailsInputProps {
  label?: string;
  corner?: string;
  error?: string;
  helper?: string;
  id?: string;
  bind?: object;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  classes?: typeof theme.emailsInput;
}

const keycode = { comma: 44, enter: 13, backspace: 8 };
const triggerKeyCodes = [keycode.comma, keycode.enter];

class EmailsInput extends Nullstack {
  emails = [];
  inputRef: HTMLInputElement;

  prepare({ bind }) {
    if (!bind) return;
    this.emails = bind.object[bind.property];
  }

  hydrate() {
    this.inputRef.addEventListener("keypress", this._onKeyPress);
    this.inputRef.addEventListener("keydown", this._onKeyDown);
    this.inputRef.addEventListener("paste", this._onPaste);
  }

  update({ bind, onchange }) {
    if (!bind) return;
    bind.object[bind.property] = this.emails;
    onchange?.(this.emails);
  }

  terminate() {
    this.inputRef.removeEventListener("keypress", this._onKeyPress);
    this.inputRef.removeEventListener("keydown", this._onKeyDown);
    this.inputRef.removeEventListener("paste", this._onPaste);
  }

  _onKeyPress = (event: KeyboardEvent) => {
    if (triggerKeyCodes.indexOf(event.keyCode) < 0) return;
    event.preventDefault();
    this._addEmail(event.target.value);
    event.target.value = "";
    event.target.focus();
  };

  _onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode !== keycode.backspace || event.target.value) return;
    this._removeLastEmail();
  };

  _onPaste = (event: ClipboardEvent) => {
    if (!event.target.matches("input")) return;
    event.preventDefault();
    const chunks = event.clipboardData.getData("Text").split(/(?:,| )+/);
    chunks.forEach((chunk) => this._addEmail(chunk));
    event.target.value = "";
  };

  _isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  _addEmail(email: string) {
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !this._isValidEmail(trimmedEmail)) return;
    this.emails.push(trimmedEmail);
  }

  _removeEmail(email: string) {
    this.emails.splice(this.emails.indexOf(email), 1);
  }

  _removeLastEmail() {
    this.emails.pop();
  }

  render({
    label,
    id,
    error,
    helper,
    corner,
    required,
    classes = theme.emailsInput,
    placeholder = "Add email",
    ...props
  }: NullstackClientContext<EmailsInputProps>) {
    return (
      <InputBase
        id={id}
        label={label}
        error={error}
        helper={helper}
        corner={corner}
        required={required}
      >
        <div class={classes.root}>
          <div class={classes.badges.base}>
            {this.emails.map((email) => (
              <Badge>
                {email}
                <button class={classes.badges.close} onclick={() => this._removeEmail(email)}>
                  <IconXCircle size={16} />
                </button>
              </Badge>
            ))}
          </div>
          <input
            class={classes.base}
            type="text"
            placeholder={placeholder}
            ref={this.inputRef}
            required={required}
            {...props}
          />
        </div>
      </InputBase>
    );
  }
}

export default EmailsInput;
