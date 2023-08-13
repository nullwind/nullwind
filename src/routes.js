import Alert from "./pages/components/Alert.mdx";
import Avatar from "./pages/components/Avatar.mdx";
import Badge from "./pages/components/Badge.mdx";
import Button from "./pages/components/Button.mdx";
import ButtonGroup from "./pages/components/ButtonGroup.mdx";
import CopyButton from "./pages/components/CopyButton.mdx";
import Divider from "./pages/components/Divider.mdx";
import Dropdown from "./pages/components/Dropdown/Dropdown.mdx";
import Modal from "./pages/components/Modal/Modal.mdx";
import Notifications from "./pages/components/Notifications/Notifications.mdx";
import Pagination from "./pages/components/Pagination/Pagination.mdx";
import Popover from "./pages/components/Popover.mdx";
import Table from "./pages/components/Table/Table.mdx";
import Tabs from "./pages/components/Tabs/Tabs.mdx";
import Title from "./pages/components/Title.mdx";
import Tooltip from "./pages/components/Tooltip.mdx";
import Checkbox from "./pages/forms/Checkbox.mdx";
import Input from "./pages/forms/Input.mdx";
import Radio from "./pages/forms/Radio.mdx";
import Rating from "./pages/forms/Rating.mdx";
import Select from "./pages/forms/Select.mdx";
import Textarea from "./pages/forms/Textarea.mdx";
import Toggle from "./pages/forms/Toggle.mdx";
import QuickStart from "./pages/getting-started/QuickStart/QuickStart.mdx";
import Theme from "./pages/getting-started/Theme/Theme.mdx";

export const routes = [
  {
    title: "Getting Started",
    routes: [
      {
        title: "Quick Start",
        path: "/",
        component: QuickStart,
      },
      {
        title: "Theme",
        path: "/getting-started/theme",
        component: Theme,
      },
    ],
  },
  {
    title: "Buttons",
    routes: [
      {
        title: "Button",
        path: "/components/button",
        component: Button,
      },
      {
        title: "CopyButton",
        path: "/components/copy-button",
        component: CopyButton,
      },
      {
        title: "ButtonGroup",
        path: "/components/button-group",
        component: ButtonGroup,
      },
    ],
  },
  {
    title: "Forms",
    routes: [
      {
        title: "Checkbox",
        path: "/components/checkbox",
        component: Checkbox,
      },
      {
        title: "Radio",
        path: "/components/radio",
        component: Radio,
      },
      {
        title: "Rating",
        path: "/components/rating",
        component: Rating,
      },
      {
        title: "Select",
        path: "/components/select",
        component: Select,
      },
      {
        title: "Textarea",
        path: "/components/textarea",
        component: Textarea,
      },
      {
        title: "Input",
        path: "/components/input",
        component: Input,
      },
      {
        title: "Toggle",
        path: "/components/toggle",
        component: Toggle,
      },
    ],
  },
  {
    title: "Navigation",
    routes: [
      {
        title: "Pagination",
        path: "/components/pagination",
        component: Pagination,
      },
      {
        title: "Tabs",
        path: "/components/tab",
        component: Tabs,
      },
      {
        title: "Dropdown",
        path: "/components/dropdown",
        component: Dropdown,
      },
    ],
  },
  {
    title: "Data display",
    routes: [
      {
        title: "Avatar",
        path: "/components/avatar",
        component: Avatar,
      },
      {
        title: "Badge",
        path: "/components/badge",
        component: Badge,
      },
      {
        title: "Table",
        path: "/components/table",
        component: Table,
      },
    ],
  },
  {
    title: "Overlays",
    routes: [
      {
        title: "Modal",
        path: "/components/modal",
        component: Modal,
      },
      {
        title: "Popover",
        path: "/components/popover",
        component: Popover,
      },
      {
        title: "Tooltip",
        path: "/components/tooltip",
        component: Tooltip,
      },
    ],
  },
  {
    title: "Typography",
    routes: [
      {
        title: "Title",
        path: "/components/title",
        component: Title,
      },
      {
        title: "Divider",
        path: "/components/divider",
        component: Divider,
      },
    ],
  },
  {
    title: "Feedback",
    routes: [
      {
        title: "Alert",
        path: "/components/alert",
        component: Alert,
      },
      {
        title: "Notifications",
        path: "/components/notifications",
        component: Notifications,
      },
    ],
  },
];
