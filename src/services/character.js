import axios from "axios";
import * as _core from "@/services/core.js"

function getCharacterStartsWith(startsWith, callback) {
    if(_core.MarvelKey == "----enter your API key here -----"){
        alert("You must enter your Marvel API key in the \\src\\services\\core.js file!!");
        callback([]);
        return;
        }
    if (startsWith == null || startsWith.length == 0) {
        callback([]);
        return;
    }
    let url =
        _core.MarvelGatewayUrl +
        "characters?nameStartsWith=" +
        startsWith +
        "&limit=100" +
        "&apikey=" +
        _core.MarvelKey;
    axios
        .get(url)
        .then(function (htmlResponse) {
            //console.log(htmlResponse);
            let response = htmlResponse.data.data;
            //console.log("character service:")
            //console.log(response.results)
            callback(response.results);
        })
        .catch(function () {
            alert(
                "There was a problem calling the service!"
            );
            callback([])
        });
}

export { getCharacterStartsWith }