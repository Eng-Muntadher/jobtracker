const Spinner = ({}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-8 border-solid border-gray-500 border-t-transparent [animation-duration:2s]"></div>
    </div>
  );
};

export default Spinner;
