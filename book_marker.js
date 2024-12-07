// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let formEl = document.getElementById("bookmarkForm");

let ipnameEl = document.getElementById("siteNameInput");
let nameerrEl = document.getElementById("siteNameErrMsg");

let ipurlEl = document.getElementById("siteUrlInput");
let urlerrEl = document.getElementById("siteUrlErrMsg");

let btnEl = document.getElementById("submitBtn");
let bookmarklistEl = document.getElementById("bookmarksList");


let data = {
    site_name: "",
    site_url: ""
}

ipnameEl.addEventListener("change", function(event) {
    let nameipvalue = event.target.value;
    if (nameipvalue === "") {
        nameerrEl.textContent = "Required*";
    } else {
        nameerrEl.textContent = "";
    }
    data.site_name = nameipvalue;
});

ipurlEl.addEventListener("change", function(event) {
    let urlipvalue = event.target.value;
    if (urlipvalue === "") {
        urlerrEl.textContent = "Required*";
    } else {
        urlerrEl.textContent = "";
    }
    data.site_url = urlipvalue;
});

function validationofdata(data) {
    let {
        site_name,
        site_url
    } = data;
    if (site_name === "") {
        nameerrEl.textContent = "Required*";
    }
    if (site_url === "") {
        urlerrEl.textContent = "Required*";
    }
}

function displaybookmark(data) {
    let name = data.site_name;
    let url = data.site_url;
    if ((name !== "") && (url !== "")) {
        let paragraphEl = document.createElement("p");
        paragraphEl.textContent = name;
        paragraphEl.classList.add("bookmarkheading");
        bookmarklistEl.appendChild(paragraphEl);

        let breakEl = document.createElement("br");
        paragraphEl.appendChild(breakEl);

        let anchorEl = document.createElement("a");
        anchorEl.textContent = url;
        anchorEl.target = "_blank";
        anchorEl.href = url;
        paragraphEl.appendChild(anchorEl);
    }
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

btnEl.addEventListener("click", function(event) {
    event.preventDefault();
    validationofdata(data);
    displaybookmark(data);
});