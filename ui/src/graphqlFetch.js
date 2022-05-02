// TODO
// const dateRegex = new RegExp("");

// TODO
// function jsonDateReviver(key, value) {}
const API_ENDPOINT = "http://localhost:3001/graphql"

export default async function graphqlFetch(query, variables = {}) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables }),
        })
        const body = await response.text();
        // TODO: parse body with json date reviver
        const result = JSON.parse(body);

        if (result.errors) {
            // handle errors one at a time
            const error = result.errors[0];
            if (error.extensions.code == "BAD_USER_INPUT") {
                console.log(`## graphql fetch BAD USER INPUT`)
                // const details = error.extensions.exception.errors.join("\n");
                const details = error.details;
                alert(`${error.message}: \n ${details}`);
            } else {
                alert(`${error.extenions.code}: ${error.message}`)
            }
        }
        return result.data
    } catch (err) {
        alert(`## Error occurred during graphqlFetch: \n${err}`)
    }
}