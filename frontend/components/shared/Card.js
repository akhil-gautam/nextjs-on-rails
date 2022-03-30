// card component

function CardContainer({ className = '', children, ...rest }) {
  return (
    <div
      className={`${className} shadow-2xl flex flex-col overflow-hidden max-w-sm`}
      {...rest}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, ...rest }) {
  return (
    <div
      className='flex justify-between items-center flex-wrap px-4 py-2 text-gray-800 font-semibold text-xl leading-7'
      {...rest}
    >
      {children}
    </div>
  );
}

function CardBody({ children, ...rest }) {
  return (
    <div
      className='flex flex-col items-start justify-center object-cover'
      {...rest}
    >
      {children}
    </div>
  );
}

function CardFooter({ children, className = '', ...rest }) {
  return (
    <div
      className={`${className} flex items-center space-x-2 px-4 py-2 my-5`}
      {...rest}
    >
      {children}
    </div>
  );
}

let Card = Object.assign(CardContainer, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
