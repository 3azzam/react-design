const SubCard = ({ data }) => {
  return (
    <div className="h-100 rounded bg-white main-font-bold position-relative">
      <div className="mb-3 p-3 rounded  bg-light justify-content-start flex-column">
        <div className="d-flex justify-content-between align-items-start" >
        <h4 className="color-darkBlue">{data.title}</h4>
        <span className="color-gray size7-10" >{data.period}</span>
        </div>
        <h1 className=" color-gray mb-0">مجانا</h1>
      </div>
      <div className="p-3 d-flex justify-content-start flex-column my-3">
        {data.perks.map((perk) => (
          <span className="mb-2 size7-10 main-font" key={perk}>
            <i className="fa-solid fa-check fa-fw color-orange"></i> {perk}{" "}
          </span>
        ))}
      </div>
      <div
        className="p-3 position-sticky w-100 fixed-bottom"
        style={{ top: "100%" }}
      >
        <button className=" w-100 btn text-white bg-darkBlue">انشاء حساب</button>
      </div>
    </div>
  );
};

export default SubCard;
