const Main = ({ children, title }) => {
  return (
    <section className="flex justify-center min-h-screen">
      <div className="w-[80%]  m-[20px]">
        <h2 className="my-[50px]">
          {title} <br /> 모두 여기에서 알려드릴게요!
        </h2>
        {children}
        <div></div>
      </div>
    </section>
  );
};

export default Main;
