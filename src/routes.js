import Alert from "./pages/components/Alert.mdx";
import Avatar from "./pages/components/Avatar.mdx";
import Badge from "./pages/components/Badge.mdx";
import Button from "./pages/components/Button.mdx";
import ButtonGroup from "./pages/components/ButtonGroup.mdx";
import Divider from "./pages/components/Divider.mdx";
import Modal from "./pages/components/Modal/Modal.mdx";
import Tab from "./pages/components/Tab/Tab.mdx";
import Table from "./pages/components/Table.mdx";
import Title from "./pages/components/Title.mdx";
import Checkbox from "./pages/forms/Checkbox.mdx";
import Radio from "./pages/forms/Radio.mdx";
import Rating from "./pages/forms/Rating.mdx";
import Select from "./pages/forms/Select.mdx";
import Textarea from "./pages/forms/Textarea.mdx";
import TextInput from "./pages/forms/TextInput.mdx";
import Toggle from "./pages/forms/Toggle/Toggle.mdx";
import QuickStart from "./pages/getting-started/QuickStart.mdx";
import Theme from "./pages/getting-started/Theme.mdx";

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
    title: "Components",
    routes: [
      {
        title: "Alert",
        path: "/components/alert",
        component: Alert,
      },
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
        title: "Button",
        path: "/components/button",
        component: Button,
      },
      {
        title: "ButtonGroup",
        path: "/components/button-group",
        component: ButtonGroup,
      },
      {
        title: "Divider",
        path: "/components/divider",
        component: Divider,
      },
      {
        title: "Modal",
        path: "/components/modal",
        component: Modal,
      },
      {
        title: "Tab",
        path: "/components/tab",
        component: Tab,
      },
      {
        title: "Table",
        path: "/components/table",
        component: Table,
      },
      {
        title: "Title",
        path: "/components/title",
        component: Title,
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
        title: "TextInput",
        path: "/components/textInput",
        component: TextInput,
      },
      {
        title: "Toggle",
        path: "/components/toggle",
        component: Toggle,
      },
    ],
  },
];
