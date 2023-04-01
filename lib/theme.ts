const theme = {
  button: {
    base: "items-center justify-center text-sm px-4 py-2 font-medium rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-50",
    color: {
      primary:
        "text-white bg-primary-500 border border-transparent hover:bg-primary-800 disabled:hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-500 dark:disabled:hover:bg-primary-500",
      secondary:
        "text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 disabled:hover:bg-white dark:bg-transparent dark:text-slate-400 dark:border-slate-500 dark:hover:text-white dark:hover:bg-slate-500 dark:disabled:hover:bg-slate-800",
      info: "text-white bg-info-500 border border-transparent hover:bg-info-800 disabled:hover:bg-info-500 dark:bg-info-500 dark:hover:bg-info-500 dark:disabled:hover:bg-info-500",
      success:
        "text-white bg-success-500 border border-transparent hover:bg-success-800 disabled:hover:bg-success-500 dark:bg-success-500 dark:hover:bg-success-500 dark:disabled:hover:bg-success-500",
      warning:
        "text-white bg-warning-400 border border-transparent hover:bg-warning-500 disabled:hover:bg-warning-400 dark:disabled:hover:bg-warning-400",
      danger:
        "text-white bg-danger-500 border border-transparent hover:bg-danger-800 disabled:hover:bg-danger-800 dark:bg-danger-500 dark:hover:bg-danger-500 dark:disabled:hover:bg-danger-500",
    },
    outline: {
      primary:
        "text-primary-500 bg-white border border-primary-500 hover:bg-primary-50 disabled:hover:bg-white dark:text-primary-500 dark:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white dark:disabled:hover:bg-slate-800",
      secondary:
        "text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 disabled:hover:bg-white dark:text-slate-400 dark:border-slate-500 dark:hover:text-white dark:hover:bg-slate-500 dark:disabled:hover:bg-slate-800",
      info: "text-info-500 bg-white border border-info-500 hover:bg-info-50 disabled:hover:bg-white dark:text-info-500 dark:border-info-500 dark:hover:bg-info-500 dark:hover:text-white dark:disabled:hover:bg-slate-800",
      success:
        "text-success-500 bg-white border border-success-500 hover:bg-success-50 disabled:hover:bg-white dark:text-success-500 dark:border-success-500 dark:hover:bg-success-500 dark:hover:text-white dark:disabled:hover:bg-slate-800",
      warning:
        "text-warning-400 bg-white border border-warning-400 hover:bg-warning-50 disabled:hover:bg-white dark:text-warning-400 dark:border-warning-400 dark:hover:bg-warning-500 dark:disabled:hover:bg-slate-800",
      danger:
        "text-danger-500 bg-white border border-danger-500 hover:bg-danger-50 disabled:hover:bg-white dark:text-danger-500 dark:border-danger-500 dark:hover:bg-danger-500 dark:hover:text-white dark:disabled:hover:bg-slate-800",
    },
    active: {
      primary: "bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-600",
      secondary: "bg-secondary-200 dark:bg-secondary-600 dark:hover:bg-secondary-600",
      info: "bg-info-600 dark:bg-info-600 dark:hover:bg-info-600",
      success: "bg-success-600 dark:bg-success-600 dark:hover:bg-success-600",
      warning: "bg-warning-600 dark:bg-warning-600 dark:hover:bg-warning-600",
      danger: "bg-danger-600 dark:bg-danger-600 dark:hover:bg-danger-600",
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3",
    },
  },
  buttonGroup: {
    base: "inline-flex",
    position: {
      none: "",
      start: "rounded-r-none border-r-0",
      middle: "!rounded-none border-r-0",
      end: "rounded-l-none",
    },
  },
  alert: {
    base: "flex flex-col gap-2 p-4 text-sm rounded-lg",
    color: {
      primary: "text-primary-500 bg-primary-50 dark:bg-primary-200 dark:text-primary-800",
      secondary: "text-secondary-500 bg-secondary-50 dark:bg-secondary-500 dark:text-secondary-300",
      info: "text-info-500 bg-info-50 border-info-500 dark:bg-info-200 dark:text-info-800",
      success: "text-success-500 bg-success-50 dark:bg-success-200 dark:text-success-800",
      warning: "text-warning-500 bg-warning-50 dark:bg-warning-200 dark:text-warning-800",
      danger: "text-danger-500 bg-danger-50 dark:bg-danger-200 dark:text-danger-800",
    },
    wrapper: "flex items-start",
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    close: {
      base: "p-1.5 -mx-1.5 -mt-1.5",
      icon: "w-4 h-4",
      color: {
        info: "text-info-500 dark:text-info-600",
        success: "text-success-500 dark:text-success-600",
        warning: "text-warning-500 dark:text-warning-600",
        danger: "text-danger-500 dark:text-danger-600",
      },
    },
  },
  label:
    'block text-sm font-medium text-slate-700 leading-4 cursor-pointer data-[required]:after:ml-0.5 data-[required]:after:text-red-500 data-[required]:after:content-["*"]',
  corner: "text-sm text-slate-500 leading-4",
  helper: "text-sm text-slate-500 leading-4",
  error: "text-sm text-danger-600 leading-4",
  input: {
    base: "flex flex-col gap-1.5",
    labelWrapper: "flex justify-between",
  },
  inlineInput: {
    base: "relative flex items-start gap-3",
    labelWrapper: "flex flex-col gap-1.5",
  },
  textInput: {
    base: "p-2 block w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "!border-danger-300 text-danger-900 placeholder-danger-300",
  },
  select: {
    base: "p-2 block w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "!border-danger-300 text-danger-900 placeholder-danger-300",
  },
  textarea: {
    base: "p-2 block w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "!border-danger-300 text-danger-900 placeholder-danger-300",
  },
  checkbox: {
    base: "h-4 w-4 rounded border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "!border-danger-300 text-danger-900 placeholder-danger-300",
  },
  radio: {
    base: "h-4 w-4 rounded-full border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "!border-danger-300 text-danger-900 placeholder-danger-300",
  },
  toggle: {
    base: "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200",
    hasLabel: "-mt-1",
    checked: {
      on: "bg-primary-600",
      off: "bg-slate-200",
    },
    disabled: "cursor-not-allowed opacity-50",
    switch: {
      base: "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      checked: {
        on: "translate-x-5",
        off: "translate-x-0",
      },
    },
  },
  modal: {
    base: "modal-transition fixed z-30 inset-0 overflow-y-auto",
    visible: {
      on: "block",
      off: "hidden",
    },
    wrapper: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center",
    overlay: "fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity",
    content:
      "relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full",
    close: {
      base: "absolute top-4 right-4",
      button: {
        base: "bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none",
        icon: "h-5 w-5",
      },
    },
  },
  badge: {
    base: "rounded-full font-semibold px-2 py-1 text-xs",
    color: {
      primary: "bg-primary-50 text-primary-600",
      secondary: "bg-secondary-50 text-secondary-600",
      info: "bg-info-50 text-info-600",
      success: "bg-success-50 text-success-600",
      warning: "bg-warning-50 text-warning-600",
      danger: "bg-danger-50 text-danger-600",
    },
  },
  avatar: {
    base: "flex flex-wrap items-center gap-3",
    imageWrapper: "h-10 w-10 flex-shrink-0",
    image: "h-full w-full rounded-full object-cover object-center ring ring-white",
    imageFallback:
      "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary-100 text-slate-500",
    name: "text-sm font-medium text-secondary-500",
    description: "text-xs text-secondary-400",
  },
  table: {
    base: "w-full border-collapse bg-white text-left text-sm text-slate-500",
    thead: "bg-slate-50",
    th: "px-6 py-4 font-medium text-slate-900",
    tbody: "divide-y divide-slate-100 border-t border-slate-100",
    tr: "",
    td: "px-6 py-4",
  },
  tab: {
    list: {
      base: "border-b border-b-slate-100 -mb-px flex items-center gap-4 text-sm font-medium w-auto",
      item: {
        base: "inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-primary-600 hover:text-primary-600",
        active:
          "relative text-primary-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-600",
      },
    },
    panel: "py-3",
  },
  rating: {
    base: "flex items-center",
    star: {
      base: "h-6 w-6",
      empty: "text-slate-300 dark:text-slate-500",
      filled: "text-yellow-400",
    },
  },
  title: {
    1: "text-4xl font-bold text-slate-900",
    2: "text-3xl font-bold text-slate-900",
    3: "text-2xl font-bold text-slate-900",
    4: "text-xl font-bold text-slate-900",
    5: "text-lg font-bold text-slate-900",
    6: "text-base font-bold text-slate-900",
  },
  divider: {
    base: "my-8 text-sm flex items-center gap-4 before:h-px before:flex-1 before:bg-slate-300 before:content-[''] after:h-px after:flex-1 after:bg-slate-300 after:content-['']",
  },
};

export default theme;
