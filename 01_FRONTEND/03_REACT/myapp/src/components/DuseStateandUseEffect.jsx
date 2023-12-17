import React, { useEffect, useState } from "react";

function DuseStateandUseEffect() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(false);
        setData(data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setData({});
      });
  }, []);

  return (
    <div>
      <h1>{loading ? "loading" : data.name}</h1>
      <h1>{error ? "Something Went Wrong" : null}</h1>
    </div>
  );
}

export default DuseStateandUseEffect;
