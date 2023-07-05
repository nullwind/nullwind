import Nullstack from "nullstack";

import { Alert } from "nullwind";

import BaseIframe from "./BaseIframe";
interface IAlertIframe {
  theme: object;
}
class AlertIframe extends Nullstack<IAlertIframe> {
  render({ theme }) {
    return (
      <BaseIframe title="Alerts">
        <div class="flex flex-col gap-4">
          <Alert theme={theme} color="primary">
            <h4 class="font-bold">Info alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
          <Alert theme={theme} color="secondary">
            <h4 class="font-bold">Info alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
          <Alert theme={theme} color="info">
            <h4 class="font-bold">Info alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
          <Alert theme={theme} color="success">
            <h4 class="font-bold">Success alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
          <Alert theme={theme} color="warning">
            <h4 class="font-bold">Warning alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
          <Alert theme={theme} color="danger">
            <h4 class="font-bold">Danger alert</h4>
            <div class="mt-1">
              <p>
                Lorem ipsum dolor sit amet. Internos reprehenderit perspiciatis commodi et omnis
                impedit.
              </p>
            </div>
          </Alert>
        </div>
      </BaseIframe>
    );
  }
}

export default AlertIframe;
