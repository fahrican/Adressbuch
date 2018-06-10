document.addEventListener("DOMContentLoaded", function (event) {

    const ulHoldContacts = document.getElementById("addressbook");

    //const tData = JSON.parse("address_book.json");

    var contacts = [
        {
            "name": "Matthias",
            "number": "067678967"
        },
        {
            "name": "Marco",
            "number": "066478967"
        },
        {
            "name": "Dominik",
            "number": "065678969897"
        },
        {
            "name": "Steve",
            "number": "065078967"
        },
        {
            "name": "Markus",
            "number": "068078967"
        }
    ];

    function iterateThroughContacts() {

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < contacts.length; i++) {

            const name = document.createElement("LI");
            const number = document.createElement("LI");

            name.innerText = contacts[i].name;
            name.className = "alert alert-dark";
            number.innerText = contacts[i].number;
            number.className = "alert alert-success";

            fragment.appendChild(name);
            fragment.appendChild(number);
        }

        ulHoldContacts.appendChild(fragment);
    }

    iterateThroughContacts();
});