const BASE_URL = "https://amiiboapi.com/api/"

// Amiibo API client
// API docs: https://amiiboapi.com/docs/
export default class AmiiboApiClient {

    // path is the api path to get
    // params is an object containing key:value pairs for the http query parameters
    async makeRequest(path, params){
        let query = new URLSearchParams(params).toString();
        query = (query.length > 0) ? "?" + query : query;
        try{
            let response = await fetch(BASE_URL + path + query, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            return {data: await response.json(), error: false}
            
        } catch (e) {
            console.log(e)
            return {data: {}, error: true}
        }
    }

    async getAllAmiibos() {
        return this.makeRequest("amiibo/", {})
    }
}