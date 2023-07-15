import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NewUrl } from "./NewUrl";
import { UtilsContext } from "../Context/UtilsContext.js";

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [createdUrlData, setCreatedUrlData] = useState({});

  const { formattedDate, formattedShortUrl } = useContext(UtilsContext);
  const createUrl = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://alias.cyclic.app/urls/createUrl",
        {
          longUrl: userInput,
        }
      );
      console.log(response.data);
      toast.success("Successful Generation");
      setCreatedUrlData(response.data);
    } catch (error) {
      toast.warn("Invalid URL Generate Failed", { position: "top-left" });
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={(e) => createUrl(e)}>
        <label htmlFor="typeHere">Create Your Alias:</label>
        <input
          id="typeHere"
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
      {Object.keys(createdUrlData).length > 0 ? (
        <NewUrl
          longUrl={createdUrlData.longUrl}
          shortUrl={formattedShortUrl(createdUrlData.shortUrl)}
          dateCreated={formattedDate(createdUrlData.createdAt)}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Form;
