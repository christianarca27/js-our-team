let members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "../img/barbara-ramos-graphic-designer.jpg"
    }
];

const memberListEl = document.getElementById("member-list");

for(let i = 0; i < members.length; i++) {
    console.log("Membro " + i + ":");

    const newLiEl = document.createElement("li");
    newLiEl.classList.add("member");

    for(let key in members[i]) {
        console.log(key + ": " + members[i][key]);

        let newDivEl;
        if(key == "photo") {
            newDivEl = document.createElement("img");
            newDivEl.src = members[i][key];
        }
        else {
            newDivEl = document.createElement("div");
            newDivEl.classList.add(key);
            newDivEl.innerText = members[i][key];
        }

        newLiEl.append(newDivEl);
    }
    memberListEl.append(newLiEl);
}