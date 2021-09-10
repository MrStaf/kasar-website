export default function Title(props) {
  return (
    <div className="flex items-center w-full mt-10 mb-6 text-3xl sm:text-4xl font-logo">
      <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M25.5 12.9019C27.5 14.0566 27.5 16.9434 25.5 18.0981L5.25 29.7894C3.25 30.9441 0.749999 29.5007 0.749999 27.1913L0.75 3.80866C0.75 1.49925 3.25 0.0558794 5.25 1.21058L25.5 12.9019Z" fill="#7A1AF3" />
      </svg>
      <h1 className="mt-2 ml-2 uppercase">{props.children}</h1>
    </div>
  );
}
