export default {
  button: {
    default: {
      base: 'p-3 flex items-center justify-between space-x-4 text-base uppercase font-medium tracking-wider rounded-lg shadow-md focus:outline-none transition hover:shadow-lg focus:ring-2 ring-offset-2 ring-gray-600',
      primary: 'bg-purple-700 hover:bg-purple-500 text-white',
      success: 'bg-green-500 hover:bg-green-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      neutral: 'bg-gray-800 hover:bg-gray-700 text-white',
      link: 'bg-transparent shadow-none hover:shadow-none hover:bg-gray-200 hover:text-black',
    },
    outline: {
      base: 'p-3 border flex items-center justify-between space-x-4 text-base uppercase font-medium tracking-wider rounded-lg shadow-md focus:outline-none transition hover:shadow-lg focus:ring-2 ring-offset-2 ring-gray-600',
      primary:
        'border-purple-600 text-black hover:bg-purple-800 hover:text-white',
      success:
        'border-green-500 text-black hover:bg-green-800 hover:text-white',
      danger: 'border-red-500 text-black hover:bg-red-800 hover:text-white',
      neutral: 'border-gray-500 text-black hover:bg-gray-800 hover:text-white',
    },
  },
  card: {
    default: 'flex flex-col bg-white transition hover:shadow-2xl hover:ring-2',
    head: 'text-left font-bold tracking-wider text-xl p-2',
    body: 'text-gray-800',
    foot: 'flex justify-end space-x-4',
  },
  pill: {
    base: 'flex items-center space-x-1 px-3 py-1 rounded-3xl font-semibold text-sm',
    success:
      'text-green-700 bg-green-50 dark:bg-green-700 dark:text-green-50 hover:bg-green-100 dark:hover:bg-green-600',
    danger:
      'text-red-700 bg-red-50 dark:text-red-50 dark:bg-red-700 hover:bg-red-100 dark:hover:bg-red-600',
    warning:
      'text-yellow-700 bg-yellow-50 dark:text-white dark:bg-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-600',
    primary:
      'text-purple-700 bg-purple-50 dark:text-white dark:bg-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600',
    default: 'text-gray-800 bg-gray-200 hover:bg-gray-800 hover:text-white',
  },
  backdrop: {
    base: 'fixed inset-0 z-40 flex items-end  sm:items-center sm:justify-center',
    blurred: 'bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-xs',
  },
  dropdown: {
    align: {
      left: 'left-0',
      right: 'right-0',
    },
    list: {
      base: 'absolute w-64 p-2 mt-2 text-gray-800 font-semibold bg-white bg-opacity-60 text-sm ring-2 ring-gray-800 rounded-xl shadow-md min-w-max-content backdrop-filter backdrop-blur-lg',
    },
    item: {
      base: 'flex uppercase w-full justify-between cursor-pointer hover:text-white rounded-md hover:bg-gray-800 px-3 py-2',
    },
  },
  input: {
    base: 'block w-full px-2 py-3 font-medium transition duration-200 focus:shadow-lg focus:outline-none ring-offset-2',
    active: 'focus:ring-2 focus:ring-purple-300',
    valid: 'focus:ring-2 focus:ring-green-300',
    invalid: 'focus:ring-2 focus:ring-red-400',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300',
    bordered: 'border border-gray-400 rounded-lg',
  },
  modal: {
    base: 'my-auto p-6 overflow-hidden bg-white rounded-3xl shadow-xl',
    xButton:
      'inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-900 hover:bg-gray-200',
  },
  table: {
    base: 'w-full whitespace-no-wrap',
    scroller: 'w-full overflow-x-auto',
    container: 'w-full overflow-hidden rounded-xl shadow-md',
  },
  thead: {
    base: 'border-b text-md font-semibold tracking-wide text-left text-gray-500 uppercase bg-purple-50',
  },
  th: {
    base: 'py-6 px-4',
  },
  tr: {
    base: {
      even: 'bg-blue-50 transition hover:bg-gray-50',
      odd: 'bg-white transition hover:bg-gray-50',
    },
  },
  tbody: {
    base: 'text-lg font-normal divide-y text-gray-700',
  },
  td: {
    base: 'p-4',
  },
  tfoot: {
    base: 'py-6 px-4 border-t text-gray-500 bg-purple-50',
  },
  list: {
    base: 'w-full overflow-hidden flex flex-col justify-center items-center list-none divide-y divide-gray-200 border-2 border-gray-800 rounded-xl',
    header:
      'w-full px-6 py-4 bg-gray-500 text-white font-semibold text-xl flex items-center justify-start',
    item: {
      base: 'flex group w-full px-6 py-3 transition hover:bg-gray-900 hover:text-white',
    },
  },
  alert: {
    base: 'flex w-full px-6 py-4 my-2 rounded-xl shadow-sm font-semibold text-md',
    variant: {
      outlined: {
        default: 'border border-gray-300 text-gray-600',
        error: 'border border-red-300 text-red-600',
        warning: 'border border-yellow-300 text-yellow-600',
        success: 'border border-green-300 text-green-600',
        info: 'border border-purple-300 text-purple-600',
      },
      default: {
        default: 'bg-gray-50 text-gray-800',
        error: 'bg-red-50 text-red-800',
        warning: 'bg-yellow-50 text-yellow-800',
        success: 'bg-green-50 text-green-800',
        info: 'bg-purple-50 text-purple-800',
      },
      filled: {
        default: 'bg-gray-900 text-white',
        error: 'bg-red-900 text-white',
        warning: 'bg-yellow-900 text-white',
        success: 'bg-green-900 text-white',
        info: 'bg-purple-900 text-white',
      },
    },
  },
  avatar: {
    base: '',
    size: {
      large: 'w-20 h-20',
      regular: 'w-12 h-12',
      small: 'w-6 h-6',
    },
  },
  select: {
    base: 'w-full border p-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2 ring-purple-400',
    valid: 'border-green-300',
    invalid: 'border-red-500',
    active: '',
    disabled: 'bg-gray-100 cursor-not-allowed',
  },
  option: {
    base: '',
  },
  label: {
    base: 'block space-y-1 my-2 w-full text-gray-800 text-md font-semibold',
    default: '',
    outlined:
      'p-4 rounded-xl border border-purple-600 transition hover:bg-gray-50 hover:bg-opacity-50 hover:border-purple-800',
  },
  helpertext: {
    base: 'text-sm font-semibold',
    info: 'text-gray-500',
    error: 'text-red-500',
    success: 'text-green-500',
    warn: 'text-yellow-500',
  },
  toggleSwitch: {
    base: {
      rect: 'cursor-pointer transition-all duration-400 ease-in-out fill-current',
      circle: 'transition-all duration-400 ease-in-out fill-current text-white',
      toggledOff: 'text-gray-300',
    },
    disabled: {
      rect: 'fill-current text-gray-400',
      circle: 'fill-current text-gray-300',
    },
    primary: 'text-blue-400',
    danger: 'text-red-400',
    success: 'text-green-400',
    neutral: 'text-gray-800',
  },
  link: {
    base: 'inline font-semibold transition duration-400 ease-in-out',
    default: 'text-purple-500 hover:text-purple-700 active:text-purple-300',
    info: 'text-blue-500 hover:text-blue-700 active:text-blue-300',
    error: 'text-red-500 hover:text-red-700 active:text-red-300',
    success: 'text-green-500 hover:text-green-700 active:text-green-300',
    warn: 'text-yellow-500 hover:text-yellow-700 active:yellow-purple-300',
  },

  breadcrumbs: {
    base: 'flex px-6 py-2',
    default: 'text-blue-600 font-semibold text-sm border-b',
    error: 'border border-red-300 bg-red-50 text-red-500',
    warn: 'border border-yellow-300 bg-yellow-50 text-yellow-500',
    success: 'border border-green-300 bg-green-50 text-green-500',
    info: 'border border-blue-300 bg-blue-50 text-blue-500',
  },
  transition: {
    fade: {
      appear: 'opacity-0',
      appearActive: 'opacity-100 transition-opacity ease-in-out opacity-100',
      appearDone: 'opacity-100',
      enter: 'opacity-0',
      enterActive: 'opacity-100 transition-opacity ease-in-out',
      enterDone: 'opacity-100',
      exit: 'opacity-100',
      exitActive: 'opacity-0',
      exitDone: 'transition-opacity ease-in-out opacity-0',
    },
    grow: {
      appear: 'transform scale-0',
      appearActive: 'transform scale-100 transition-transform ease-in-out',
      appearDone: 'transform scale-100',
      enter: 'transform scale-0',
      enterActive: 'transform scale-100 transition-transform ease-in-out',
      enterDone: 'transform scale-100',
      exit: 'transform scale-100',
      exitActive: 'transform scale-0',
      exitDone: 'transition-transform ease-in-out transform scale-0',
    },
  },
};
