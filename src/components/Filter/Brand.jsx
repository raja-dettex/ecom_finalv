export const Brand = () => {
  return (
    <div className="category">
      <div className="category-title">Brand</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" value="Roadster" />
          <span>Roadster</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" value="Zara" />
          <span>Zara</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" value="Forever 21" />
          <span>Forever 21</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" value="DNMX" />
          <span>DNMX</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" value="Peter England" />
          <span>Peter England</span>
        </label>
      </div>
    </div>
  );
};
