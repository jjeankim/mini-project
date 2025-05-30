const Main = ({ children, title }) => {
  return (
    <section className="flex justify-center min-h-screen pt-[120px]">
      <div className="w-[80%]  m-[20px]">
        <h2 className="my-[50px] text-2xl">
          {title} <br />{" "}
          <span className="text-3xl">모두 여기에서 알려드릴게요!</span>
        </h2>
        {children}
        <div></div>
      </div>
    </section>
  );
};

export default Main;
