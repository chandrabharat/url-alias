import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [createdUrlData, setCreatedUrlData] = useState({});

  const createUrl = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://url-alias.cyclic.app/urls/createUrl",
        {
          longUrl: userInput,
        }
      );

      toast.success("Successful Generation");
      console.log(response.data.createdAt);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-container" onSubmit={(e) => createUrl(e)}>
      <input
        type="text"
        placeholder="Type URL Here"
        className="form-input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button type="submit" className="form-submit">
        Generate
      </button>
    </form>
  );
};

export default Form;
