const cors = document.getElementById("cors");

const server = "http://localhost:8080/CORSServer/";

tryURL(server + "api/cors/disallowed");
tryURL(server + "api/cors/allowed");
tryURL("http://ip.jsontest.com/?alloworigin=false");
tryURL(server + "api/cors/proxy");

function tryURL(url)
{
    fetch(url, {method: "get"})
        .then(function (response) {
            if (!response.ok)
            {
                throw error;
            }
            return response.json();
        })
        .then(function (json) {
            cors.innerHTML += "<p>GET OK - " + url + " JSON: " + JSON.stringify(json) + "</p>";
        })
        .catch(function (error) {
            cors.innerHTML += "<p>GET FAILED - " + url + "</p>";
        });
}