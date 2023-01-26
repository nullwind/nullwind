const theme = {
  button: {
    base: "items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-50",
    rounded: "rounded-md",
    fullSized: "w-full",
    color: {
      primary:
        "text-white bg-primary-500 border border-transparent hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 disabled:hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-500 dark:focus:ring-primary-800 dark:disabled:hover:bg-primary-500",
      secondary:
        "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 disabled:hover:bg-white focus:ring-secondary-500 focus:text-secondary-500 dark:bg-transparent dark:text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-500 focus:ring-2 dark:disabled:hover:bg-gray-800",
      info: "text-white bg-info-500 border border-transparent hover:bg-info-800 focus:ring-4 focus:ring-info-300 disabled:hover:bg-info-500 dark:bg-info-500 dark:hover:bg-info-500 dark:focus:ring-info-800 dark:disabled:hover:bg-info-500",
      success:
        "text-white bg-success-500 border border-transparent hover:bg-success-800 focus:ring-4 focus:ring-success-300 disabled:hover:bg-success-500 dark:bg-success-500 dark:hover:bg-success-500 dark:focus:ring-success-800 dark:disabled:hover:bg-success-500",
      warning:
        "text-white bg-warning-400 border border-transparent hover:bg-warning-500 focus:ring-4 focus:ring-warning-300 disabled:hover:bg-warning-400 dark:focus:ring-warning-900 dark:disabled:hover:bg-warning-400",
      danger:
        "text-white bg-danger-500 border border-transparent hover:bg-danger-800 focus:ring-4 focus:ring-danger-300 disabled:hover:bg-danger-800 dark:bg-danger-500 dark:hover:bg-danger-500 dark:focus:ring-danger-900 dark:disabled:hover:bg-danger-500",
    },
    outline: {
      primary:
        "text-primary-500 bg-white border border-primary-500 hover:bg-primary-50 disabled:hover:bg-white focus:ring-4 focus:ring-primary-300 dark:text-primary-500 dark:border-primary-500 dark:hover:bg-primary-500 dark:hover:text-white dark:disabled:hover:bg-gray-800",
      secondary:
        "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 disabled:hover:bg-white focus:ring-secondary-500 focus:text-secondary-500 dark:text-gray-400 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-500 focus:ring-2 dark:disabled:hover:bg-gray-800",
      info: "text-info-500 bg-white border border-info-500 hover:bg-info-50 disabled:hover:bg-white focus:ring-4 focus:ring-info-300 dark:text-info-500 dark:border-info-500 dark:hover:bg-info-500 dark:hover:text-white dark:disabled:hover:bg-gray-800",
      success:
        "text-success-500 bg-white border border-success-500 hover:bg-success-50 disabled:hover:bg-white focus:ring-4 focus:ring-success-300 dark:text-success-500 dark:border-success-500 dark:hover:bg-success-500 dark:hover:text-white dark:disabled:hover:bg-gray-800",
      warning:
        "text-warning-400 bg-white border border-warning-400 hover:bg-warning-50 disabled:hover:bg-white focus:ring-4 focus:ring-warning-300 dark:text-warning-400 dark:border-warning-400 dark:hover:bg-warning-500 dark:disabled:hover:bg-gray-800",
      danger:
        "text-danger-500 bg-white border border-danger-500 hover:bg-danger-50 disabled:hover:bg-white focus:ring-4 focus:ring-danger-300 dark:text-danger-500 dark:border-danger-500 dark:hover:bg-danger-500 dark:hover:text-white dark:disabled:hover:bg-gray-800",
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3",
    },
  },
  alert: {
    root: {
      base: "flex flex-col gap-2 p-4 text-sm",
      borderAccent: "border-t-4",
      wrapper: "flex items-start",
      color: {
        primary:
          "text-primary-500 bg-primary-50 border-primary-500 dark:bg-primary-200 dark:text-primary-800",
        secondary:
          "text-secondary-500 bg-secondary-50 border-secondary-500 dark:bg-secondary-500 dark:text-secondary-300",
        info: "text-info-500 bg-info-50 border-info-500 dark:bg-info-200 dark:text-info-800",
        success:
          "text-success-500 bg-success-50 border-success-500 dark:bg-success-200 dark:text-success-800",
        warning:
          "text-warning-500 bg-warning-50 border-warning-500 dark:bg-warning-200 dark:text-warning-800",
        danger:
          "text-danger-500 bg-danger-50 border-danger-500 dark:bg-danger-200 dark:text-danger-800",
      },
      icon: "mr-3 inline h-5 w-5 flex-shrink-0",
      rounded: "rounded-lg",
    },
    closeButton: {
      base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 p-1.5 items-center",
      icon: "w-5 h-5",
      color: {
        info: "text-info-500 focus:ring-info-400 dark:text-info-600",
        success: "text-success-500 dark:text-success-600",
        warning: "text-warning-500 dark:text-warning-600",
        danger: "text-danger-500 dark:text-danger-600",
      },
    },
  },
  input: {
    base: "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
    error:
      "border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
  },
  label: {
    base: "mb-1 block text-sm font-medium text-gray-700",
    required: 'after:ml-0.5 after:text-red-500 after:content-["*"]',
  },
  helper: {
    base: "mt-2 text-sm text-gray-500",
  },
  error: {
    base: "mt-2 text-sm text-danger-600",
  },
  select: {
    base: "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
    error:
      "border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
  },
  textarea: {
    base: "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
    error:
      "border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
  },
  checkbox: {
    base: "h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400",
  },
  radio: {
    base: "h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400",
  },
  modal: {
    base: "modal-transition fixed z-30 inset-0 overflow-y-auto",
    wrapper: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center",
    overlay: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    container:
      "relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full",
    close: {
      base: "absolute top-0 right-0 pt-4 pr-4",
      button:
        "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
    },
    body: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    footer: "bg-gray-50 px-4 py-3 flex justify-end sm:px-6",
  },
  badge: {
    base: "rounded-full font-semibold",
    color: {
      primary: "bg-primary-50 text-primary-600",
      secondary: "bg-secondary-50 text-secondary-600",
      info: "bg-info-50 text-info-600",
      success: "bg-success-50 text-success-600",
      warning: "bg-warning-50 text-warning-600",
      danger: "bg-danger-50 text-danger-600",
    },
    size: {
      base: "px-2 py-1 text-xs",
      lg: "px-3 py-1 text-sm",
    },
  },
  avatar: {
    base: "flex flex-wrap items-center gap-3",
    image: "h-full w-full rounded-full object-cover object-center ring ring-white",
    imageFallback:
      "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary-100 text-gray-500",
    name: "text-sm font-medium text-secondary-500",
    description: "text-xs text-secondary-400",
  },
};

export default theme;
