import { UrlEntry } from "./UrlEntry";

export const NewUrl = ({ longUrl, shortUrl, dateCreated }) => {
  return (
    <table className="Table">
      <thead>
        <tr className="Table Title">
          <th colSpan="3">New URL Alias</th>
        </tr>
        <tr className="Table Columns">
          <th>Date Created</th>
          <th>Original</th>
          <th>Alias</th>
        </tr>
      </thead>
      <tbody>
        <UrlEntry
          longUrl={longUrl}
          shortUrl={shortUrl}
          dateCreated={dateCreated}
        />
      </tbody>
    </table>
  );
};
