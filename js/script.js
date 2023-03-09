let members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
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
            newDivEl.src = "../img/" + members[i][key];
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