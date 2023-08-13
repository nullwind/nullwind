import Nullstack, { NullstackClientContext } from "nullstack";

import XIcon from "./icons/XIcon";
import tc from "../tc";
import type { BaseProps } from "../types";

export const baseNotifications = {
  base: "pointer-events-none fixed inset-0 flex px-4 py-6 sm:p-6 z-50",
  slots: {
    queue: {
      base: "flex w-full flex-col space-y-4",
      variants: {
        placement: {
          "top-left": "items-start justify-start",
          "top-center": "items-center justify-start",
          "top-right": "items-end justify-start",
          "bottom-left": "items-start justify-end",
          "bottom-center": "items-center justify-end",
          "bottom-right": "items-end justify-end",
        },
      },
    },
    notification: {
      base: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg p-4 flex justify-between gap-3",
      slots: {
        icon: "flex-shrink-0",
        content: "flex flex-1 flex-col gap-1",
        title: "text-sm font-medium text-gray-900",
        message: "text-sm text-gray-500",
        closeWrapper: "flex flex-shrink-0",
        closeButton: "inline-flex bg-white text-gray-400",
        closeButtonIcon: "h-4 w-4",
      },
    },
  },
};

interface NotificationsProps extends BaseProps {
  clean?: () => void;
  hide?: (props: NotificationProps) => void;
  placement?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  show?: (props: NotificationProps) => void;
  updateData?: (props: NotificationProps) => void;
}

interface NotificationProps {
  duration?: number;
  icon?: SVGAElement;
  id?: string | number;
  message?: string;
  notificationTheme?: () => any;
  title?: string;
  withClose?: boolean;
}

export default class Notifications extends Nullstack<NotificationsProps> {
  queue = [];

  renderNotification({ icon: Icon, id, message, notificationTheme, title, withClose = true }) {
    const {
      base,
      closeButton,
      closeButtonIcon,
      closeWrapper,
      content,
      icon,
      message: messageBase,
      title: titleBase,
    } = notificationTheme();

    return (
      <div class={base()}>
        {Icon && (
          <div class={icon()}>
            <Icon />
          </div>
        )}
        <div class={content()}>
          {title && <p class={titleBase()}>{title}</p>}
          <p class={messageBase()}>{message}</p>
        </div>
        {withClose && (
          <div class={closeWrapper()}>
            <button type="button" class={closeButton()} onclick={() => this.hide({ id })}>
              <span class="sr-only">Close</span>
              <XIcon class={closeButtonIcon()} />
            </button>
          </div>
        )}
      </div>
    );
  }

  show({ duration = 4000, icon, id = Date.now(), message, title, withClose }: NotificationProps) {
    const toast = {
      id,
      icon,
      title,
      message,
      withClose,
    };

    this.queue.push(toast);

    if (duration) {
      setTimeout(() => this.hide(toast), duration);
    }
  }

  updateData({ duration = 4000, icon, id, message, title, withClose }: NotificationProps) {
    const toast = this.queue.find((toast) => toast.id === id);

    if (toast) {
      toast.icon = icon ?? toast.icon;
      toast.title = title ?? toast.title;
      toast.message = message ?? toast.message;
      toast.withClose = withClose ?? toast.withClose;
    }

    if (duration) {
      setTimeout(() => this.hide(toast), duration);
    }
  }

  hide({ id }: NotificationProps) {
    this.queue = this.queue.filter((item) => item.id !== id);
  }

  clean() {
    this.queue = [];
  }

  render({
    class: klass,
    placement = "top-right",
    theme,
  }: NullstackClientContext<NotificationsProps>) {
    const notification = tc(baseNotifications, theme?.notifications);
    const { base, notification: notificationTheme, queue } = notification();

    const sortedData = placement.includes("bottom") ? [...this.queue].reverse() : [...this.queue];

    return (
      <div aria-live="assertive" class={base({ class: klass })}>
        <div class={queue({ placement })}>
          {sortedData.map((data) => (
            <Notification {...data} notificationTheme={notificationTheme} />
          ))}
        </div>
      </div>
    );
  }
}
