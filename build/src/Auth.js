import * as HTTPS from "https";
export async function Authenticate(token) {
    const authOptions = {
        hostname: "comfy.auth.na-ka.us",
        port: 8080,
        path: "/",
        method: "GET"
    };
    const res = await new Promise((resolve, reject) => {
        HTTPS.request(authOptions, (res) => {
            resolve(res);
        });
    });
    console.log(res);
}
