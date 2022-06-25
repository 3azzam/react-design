import crown from '../../assets/images/crown.png'
import Styles from './subscriptions.module.css'

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
        <img src={crown} className={`${Styles.cardImage} mx-auto mb-4`} />
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
        <button className=" bg-gray w-100 btn">
          <span className="d-block my-1 text-white" > انضم الينا </span>
        </button>
      </div>
    </div>
  );
};

export default SubCard;
