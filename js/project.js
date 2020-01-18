const api = "https://jsonplaceholder.typicode.com/users";
fetch(api)
    .then((response) => { return response.json() })
    .then((value) => {
        let getdata = document.querySelector("#table");
        value.forEach((iteme) => {
            const { name } = iteme;
            getdata.innerHTML += `
                <li>
                     ${name}
                </li>
            `;
        })
    });
    //create function onFilterInput or onKeypressInput
function onFilterInput() {
    // get tage to display from (li) 
    var liElement = document.getElementsByTagName("li");
    //get tage from to display ("input")
    var resultInput = document.querySelector('input').value;
    // convert to Upercase();
    var filter = resultInput.toUpperCase();
    var TextValue;
    var number = -1;
     //for loop of Array
    for (let i = 0; i < liElement.length; i++) {
        TextValue = liElement[i].textContent || liElement[i].innerText;
        let isFind = TextValue.toUpperCase().indexOf(filter) > number;
        if (isFind) {
            liElement[i].style.display = "block";
        } else {
            liElement[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', onFilterInput);
// function for check when you input keyboard
function setValue(text) {
    var getapi = document.querySelector("#inputBorder");
    getapi.innerHTML = text;
}
