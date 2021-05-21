const endpoint = "https://organic-buck-15.hasura.app/v1/graphql";

export const queries = {
	movies: `
    query Movies {
      movies(limit: 30) {
        id
        movie
      }
    }
  `,
	movie: `
    query Movie($id: Int!) {
      movies_by_pk(id: $id) {
        id
        image
        movie
        rating
      }
    }
  `,
};

export const fetchData = async (body) => {
	const { data } = await fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	}).then((rsp) => rsp.json());

	return data;
};
