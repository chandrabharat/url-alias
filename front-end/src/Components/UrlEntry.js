export const UrlEntry = ({ dateCreated, longUrl, shortUrl }) => {
  return (
    <tr className="Table Entry">
      <td>{dateCreated}</td>
      <td>
        <a
          href={longUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ClickableUrl"
        >
          {longUrl}
        </a>
      </td>
      <td>
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ClickableUrl"
        >
          {shortUrl}
        </a>
      </td>
    </tr>
  );
};
