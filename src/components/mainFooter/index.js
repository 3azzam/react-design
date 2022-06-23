const firstList = [
  "الرئيسية",
  "من نحن",
  "الخدمات",
  "الفعاليات",
  "الكورسات",
  "البحوث",
];
const secondList = [
  "الورشات",
  "الأخبار",
  "الأبحاث",
  "فريق العمل",
  "العضوية",
  "اتصل بنا",
];

const MainFooter = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <p>Safa@gmail.com</p>
            <p>757 699-4478+</p>
          </div>
        </div>
        <div className="col-12  offset-lg-2 col-lg-3 mb-3">
          <div className="d-flex flex-column">
            <h5 className="main-font-bold color-darkBlue300 mb-4"> الروابط </h5>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start flex-column">
                {firstList.map((item) => (
                  <span className="mb-2 color-darkBlue300 " key={item}>
                    {" "}
                    {item}{" "}
                  </span>
                ))}
              </div>
              <div className="d-flex justify-content-start flex-column">
                {secondList.map((item) => (
                  <span className="mb-2 color-darkBlue300 " key={item}>
                    {" "}
                    {item}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-3">
          <div className="d-flex flex-column justify-content-start align-items-start ">
            <h5 className="main-font-bold color-darkBlue300 mb-0">تابعنا</h5>
            <div
              className="d-flex justify-content-between my-2rem"
              style={{ width: "125px" }}
            >
              <i
                style={{ color: "#0000ff29" }}
                className="fa-brands fa-google-plus-g"
              ></i>
              <i
                style={{ color: "#0000ff29" }}
                className="fa-brands fa-linkedin-in"
              ></i>
              <i
                style={{ color: "#0000ff29" }}
                className="fa-brands fa-twitter "
              ></i>
              <i
                style={{ color: "#0000ff29" }}
                className="fa-brands fa-facebook-f"
              ></i>
            </div>
            <h5 className="main-font-bold color-darkBlue300 mb-3">
              لمتابعة الأخبار
            </h5>
            <div className="d-flex">
              <div className="form-group mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  className="form-control btn-lg"
                  id="inputPassword2"
                />
              </div>
              <button type="submit" className="btn btn-lg bg-darkBlue mb-2 text-white">
                <span className="px-4" style={{fontWeight:"bold", fontSize:"0.9rem"}} > اشترك </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
