import * as qr from "qrcode";

function generateImage(data: string) {
    qr.toFile(
        `./src/outputImages/${data.slice(data.indexOf("@") + 1)}.png`,
        data,
        {
            color: {
                dark: "#000000",
                light: "#ffffff",
            },
        },
        function (err) {
            if (err) throw err;
            console.log("done");
        }
    );
}

const links: string[] = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos",
];

for (const data of links) {
    generateImage(data);
}
