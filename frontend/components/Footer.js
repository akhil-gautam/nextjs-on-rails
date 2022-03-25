export default function Footer() {
  return (
    <footer className='p-5 w-full text-center bg-gray-900 text-white'>
      <p className='font-semibold'>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
