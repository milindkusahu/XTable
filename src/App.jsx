import { useState } from "react";

const mockData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const App = () => {
  const [data, setData] = useState(mockData);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      const dateComparision = new Date(b.date) - new Date(a.date);
      if (dateComparision === 0) return b.views - a.views;

      return dateComparision;
    });

    setData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      const viewsComparision = b.views - a.views;
      if (viewsComparision === 0) return new Date(b.date) - new Date(a.date);
      return viewsComparision;
    });
    setData(sorted);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ date, views, article }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{views}</td>
              <td>{article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
