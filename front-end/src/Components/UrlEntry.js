export const UrlEntry = ({ dateCreated, longUrl, shortUrl }) => {
  return (
    <tr className="Table Entry">
      <td>{dateCreated}</td>
      <td>{longUrl}</td>
      <td>{shortUrl}</td>
    </tr>
  );
};
