const theme = {
  button: {
    base: "font-medium rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
    color: {
      primary:
        "text-white bg-primary-500 border border-transparent hover:bg-primary-800 disabled:hover:bg-primary-500",
      secondary:
        "text-white bg-secondary-500 border border-transparent hover:bg-secondary-800 disabled:hover:bg-secondary-500",
      info: "text-white bg-info-500 border border-transparent hover:bg-info-800 disabled:hover:bg-info-500",
      success:
        "text-white bg-success-500 border border-transparent hover:bg-success-800 disabled:hover:bg-success-500",
      warning:
        "text-white bg-warning-500 border border-transparent hover:bg-warning-800 disabled:hover:bg-warning-500",
      danger:
        "text-white bg-danger-500 border border-transparent hover:bg-danger-800 disabled:hover:bg-danger-500",
    },
    outline: {
      primary:
        "text-primary-500 bg-white border border-primary-500 hover:bg-primary-50 disabled:hover:bg-white",
      secondary:
        "text-secondary-500 bg-white border border-secondary-500 hover:bg-secondary-50 disabled:hover:bg-white",
      info: "text-info-500 bg-white border border-info-500 hover:bg-info-50 disabled:hover:bg-white",
      success:
        "text-success-500 bg-white border border-success-500 hover:bg-success-50 disabled:hover:bg-white",
      warning:
        "text-warning-500 bg-white border border-warning-500 hover:bg-warning-50 disabled:hover:bg-white",
      danger:
        "text-danger-500 bg-white border border-danger-500 hover:bg-danger-50 disabled:hover:bg-white",
    },
    active: {
      primary: "bg-primary-600",
      secondary: "bg-secondary-600",
      info: "bg-info-600",
      success: "bg-success-600",
      warning: "bg-warning-600",
      danger: "bg-danger-600",
    },
    size: {
      sm: "text-xs px-3 py-1.5",
      base: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    },
  },
  buttonGroup: {
    base: "inline-flex",
    position: {
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none",
    },
  },
  alert: {
    base: "flex gap-2 p-4 text-sm rounded-lg items-start",
    color: {
      primary: "text-primary-500 bg-primary-50",
      secondary: "text-secondary-500 bg-secondary-50",
      info: "text-info-500 bg-info-50",
      success: "text-success-500 bg-success-50",
      warning: "text-warning-500 bg-warning-50",
      danger: "text-danger-500 bg-danger-50",
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    content: "flex-1",
    close: {
      base: "p-1.5 -mx-1.5 -mt-1.5",
      icon: "w-4 h-4",
      color: {
        primary: "text-primary-500",
        secondary: "text-secondary-500",
        info: "text-info-500",
        success: "text-success-500",
        warning: "text-warning-500",
        danger: "text-danger-500",
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
    base: "w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "border-danger-300 text-danger-900 placeholder-danger-300",
  },
  select: {
    base: "w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "border-danger-300 text-danger-900 placeholder-danger-300",
  },
  textarea: {
    base: "w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "border-danger-300 text-danger-900 placeholder-danger-300",
  },
  checkbox: {
    base: "h-4 w-4 rounded border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "border-danger-300 text-danger-900 placeholder-danger-300",
  },
  radio: {
    base: "h-4 w-4 rounded-full border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
    error: "border-danger-300 text-danger-900 placeholder-danger-300",
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
    overlay: "fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity",
    wrapper: {
      base: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center",
      content: {
        base: "relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full",
        close: {
          base: "absolute top-4 right-4",
          button: {
            base: "bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none",
            icon: "h-5 w-5",
          },
        },
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
      empty: "text-slate-300",
      filled: "text-yellow-400",
    },
  },
  title: {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
  },
  divider: {
    base: "my-8 text-sm flex items-center gap-4 before:h-px before:flex-1 before:bg-slate-300 before:content-[''] after:h-px after:flex-1 after:bg-slate-300 after:content-[''] text-slate-500",
  },
};

export default theme;
