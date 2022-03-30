import { Loader } from 'react-feather';

// button variant based on color
const COLOR_VARIANT_MAP = {
  solid: {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    success: 'bg-green-500 hover:bg-green-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    warning: 'bg-orange-500 hover:bg-orange-700 text-white',
    info: 'bg-teal-500 hover:bg-teal-700 text-white',
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white',
  },
  outlined: {
    primary: 'border-2 border-blue-800 text-blue-800',
    secondary: 'border-2 border-gray-800 text-gray-800',
    success: 'border-2 border-green-800 text-green-800',
    danger: 'border-2 border-red-800 text-red-800',
    warning: 'border-2 border-orange-800 text-orange-800',
    info: 'border-2 border-teal-800 text-teal-800',
    light: 'border-2 border-gray-100 text-gray-800',
    dark: 'border-2 border-gray-900 text-black',
  },
};

const COMMON_CLASS =
  'px-6 py-2 flex justify-center uppercase tracking-wider font-bold shadow-lg transition-all focus-visible:ring-2 ring-offset-2 ring-black focus:outline-none focus:shadow-outline hover:scale-95';

export default function Button({
  loading,
  children,
  block = false,
  color = 'dark',
  variant = 'solid',
  className = '',
  ...rest
}) {
  return (
    <button
      className={`${
        COLOR_VARIANT_MAP[variant][color]
      } ${COMMON_CLASS} space-x-5 ${block ? 'w-full' : ''} ${
        loading ? 'bg-gray-500 cursor-not-allowed' : ''
      } ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {loading && (
        <span className='animate-spin'>
          <Loader />
        </span>
      )}
    </button>
  );
}
