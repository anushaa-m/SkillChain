const fetch = require("node-fetch");

async function test() {
    const res = await fetch("http://127.0.0.1:3000/issue", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Judge",
            skill: "Demo",
            issuer: "SkillChain"
        })
    });

    const data = await res.json();
    console.log(data);
}

test();
