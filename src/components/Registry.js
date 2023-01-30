const Registry = () => {
  return (
    <div className="registry">
      <h3>Registry</h3>
      <p className="question">
        We’ve happily built a home over the last six years and celebrating
        together will be the greatest gift of all.
      </p>
      <p className="question">
        If you’d like to give us a gift, we’re registered at the sites below:
      </p>

      <button
        onClick={() =>
          (window.location.href =
            "https://www.target.com/gift-registry/gift/kirsten-and-nicky-do-a-wedding")
        }
      >
        Target
      </button>
    </div>
  );
};
export default Registry;
