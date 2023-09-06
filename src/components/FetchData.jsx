import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // const fetchUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       if (!response.ok) throw new Error("Some Thins Whent Wrong!");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // };

  const asyncFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Some thins went wrong!");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchUsers();
    asyncFetch();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? (
        <h1>{error}</h1>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchData;
