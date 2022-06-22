const FreeCard = () => {
  return (
    <div className="rounded d-flex justify-content-start flex-column bg-orange p-3 main-font-bold">
      <h4 className="text-white" >انضم</h4>
      <h1 className="text-white mb-0" >مجانا</h1>
      <p className="my-4 size7-10">
        {" "}
        تعرف على جميع اخبار الإقتصاد والمالية عن طريق جمعية صفا مجانا{" "}
      </p>

        <button
          className=" btn  text-white"
          style={{ backgroundColor: "#5260AB" }}
        >
          انشاء حساب
        </button>
    </div>
  );
};

export default FreeCard;
