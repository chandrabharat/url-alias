const Form = () => {
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Type URL Here"
        className="form-input"
      ></input>
      <button type="submit" className="form-submit">
        {" "}
        Shrink{" "}
      </button>
    </form>
  );
};

export default Form;
