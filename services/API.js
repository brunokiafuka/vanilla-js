const BASE_URL = "/data/menu.json"

const API = {
    fetchMenu: async function () {
        const result = await fetch(BASE_URL);
        return await result.json();
    }
}

export default API;