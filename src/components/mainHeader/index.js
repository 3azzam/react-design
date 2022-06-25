import Input from "@mui/material/Input";

const MainHeader = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg d-flex justify-content-between">
        <a class="navbar-brand text-white" href="#">
          صفا
        </a>
        <div className="d-flex align-items-center">
          <div> EN </div>
          <div className="from-group mx-4">
            <Input
              id="input-with-icon-adornment"
            />
          </div>
          <div
            className="text-white d-flex align-items-start mx-3"
            style={{ fontSize: "15px" }}
          >
            <i
              class="mx-1 text-white fa-solid fa-calendar-days fa-fw"
              style={{ fontSize: "20px" }}
            ></i>
            <span style={{ fontSize: "0.8rem" }}>الأجندة</span>
          </div>
          <i class="fa-solid fa-circle-user" style={{ fontSize: "40px" }}></i>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
