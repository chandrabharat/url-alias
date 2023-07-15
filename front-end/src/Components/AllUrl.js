import { UrlEntry } from "./UrlEntry";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UtilsContext } from "../Context/UtilsContext.js";

export const AllUrl = () => {
  const [allUrl, setAllUrl] = useState([]);
  const { formattedDate, formattedShortUrl } = useContext(UtilsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://alias.cyclic.app/urls/");
        setAllUrl(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(allUrl).length > 0 ? (
        <table className="Table">
          <thead>
            <tr className="Table Title" id="All-Alias">
              <th colSpan="3">All Alias</th>
            </tr>
            <tr className="Table Columns">
              <th>Date Created</th>
              <th>Original</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
            {allUrl.map((url) => (
              <UrlEntry
                key={url.createdAt}
                longUrl={url.longUrl}
                shortUrl={formattedShortUrl(url.shortUrl)}
                dateCreated={formattedDate(url.createdAt)}
              />
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};
