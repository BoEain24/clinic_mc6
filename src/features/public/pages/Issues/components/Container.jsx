const Container = ({ children, className }) => {
  return (
    <div className={`w-full md:w-[720px] lg:w-[1000px] xl:w-[1200px] mx-auto xl:px-0 lg:px-8 md:px-8 px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;