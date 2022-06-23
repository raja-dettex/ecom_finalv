import { useFilter } from "./../../Filter-context";

export const Size = () => {
  const { state, filterDispatch } = useFilter();
  const handleSizechange = (e, sizeOption) => {
    const check = e.target.checked;
    filterDispatch({
      type: "SIZE",
      payload: {
        sizeOption,
        check
      }
    });
  };
  console.log(state.size);
  return (
    <div className="category">
      <div className="category-title">Size</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizechange(e, "S")}
          />
          <span>S</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizechange(e, "M")}
          />
          <span>M</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizechange(e, "L")}
          />
          <span>L</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizechange(e, "XL")}
          />
          <span>XL</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizechange(e, "XXL")}
          />
          <span>XXL</span>
        </label>
      </div>
    </div>
  );
};
