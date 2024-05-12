import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_ALL_COUNTRIES = gql`
  query Query {
    getCountries {
      id
      code
      name
      emoji
      continentCode
    }
  }
`;

function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  const { loading, error } = useQuery(GET_ALL_COUNTRIES, {
    onCompleted: (data: any) => {
      setCountries(data.getCountries);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <main>
      <section>
        <h1>Test</h1>
        {countries?.map((country) => (
          <h2 key={country.id}>{country.name}</h2>
        ))}
      </section>
    </main>
  );
}

export default Home;
