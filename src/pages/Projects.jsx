import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Projects() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://api.github.com/users/keshvikapadia3/repos")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        return response.json();

      })

      .then((data) => {
        setRepos(data);
      })

      .catch((err) => {
        setError(err.message);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (

    <section className="card">

      <h2>GitHub Repositories</h2>

      {repos.map((repo) => (

        <div key={repo.id}>

          <h3>{repo.name}</h3>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {repo.html_url}
          </a>

          <p>⭐ Stars: {repo.stargazers_count}</p>

          <hr />

        </div>

      ))}

    </section>

  );

}

export default Projects;