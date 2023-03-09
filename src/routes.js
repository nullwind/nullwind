import Alert from "./docs/components/Alert.mdx";
import Avatar from "./docs/components/Avatar.mdx";
import Badge from "./docs/components/Badge.mdx";
import Button from "./docs/components/Button.mdx";
import Icons from "./docs/components/Icons.mdx";
import Modal from "./docs/components/Modal/Modal.mdx";
import Pagination from "./docs/components/Pagination.mdx";
import Tab from "./docs/components/Tab.mdx";
import Table from "./docs/components/Table.mdx";
import Checkbox from "./docs/forms/Checkbox.mdx";
import EmailsInput from "./docs/forms/EmailsInput.mdx";
import Radio from "./docs/forms/Radio.mdx";
import Rating from "./docs/forms/Rating.mdx";
import Select from "./docs/forms/Select.mdx";
import Textarea from "./docs/forms/Textarea.mdx";
import TextInput from "./docs/forms/TextInput.mdx";
import Toggle from "./docs/forms/Toggle/Toggle.mdx";
import QuickStart from "./docs/getting-started/QuickStart.mdx";
import CreateForm from "./docs/helpers/CreateForm/CreateForm.mdx";

export const routes = [
  {
    title: "Getting Started",
    routes: [
      {
        title: "Quick Start",
        path: "/",
        component: QuickStart,
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
        title: "Icons",
        path: "/components/icons",
        component: Icons,
      },
      {
        title: "Modal",
        path: "/components/modal",
        component: Modal,
      },
      // {
      //   title: "Pagination",
      //   path: "/components/pagination",
      //   component: Pagination,
      // },
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
      // {
      //   title: "EmailsInput",
      //   path: "/components/emailsInput",
      //   component: EmailsInput,
      // },
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
  // {
  //   title: "Helpers",
  //   routes: [
  //     {
  //       title: "createForm",
  //       path: "/helpers/create-form",
  //       component: CreateForm,
  //     },
  //   ],
  // },
];
