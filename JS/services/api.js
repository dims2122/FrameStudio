/* ========================================
   API SERVICE
   ======================================== */

const API = {

    baseURL: "",


    async get(endpoint) {

        const response =
            await fetch(
                `${this.baseURL}${endpoint}`
            );

        return handleResponse(response);
    },


    async post(endpoint, data) {

        const response =
            await fetch(
                `${this.baseURL}${endpoint}`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(data)
                }
            );

        return handleResponse(response);
    }

};


async function handleResponse(response) {

    if (!response.ok) {

        throw new Error(
            `Request gagal: ${response.status}`
        );

    }

    return response.json();
}