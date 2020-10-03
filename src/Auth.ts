import * as JWT from "jsonwebtoken";
import * as HTTPS from "https";
import { IncomingMessage } from "http";

export async function Authenticate( token: string ): Promise<void>{
	const authOptions = {
		hostname: "comfy.auth.na-ka.us",
		port: 8080,
		path: "/",
		method: "GET"
	}

	const res = await new Promise(( resolve: ( res:IncomingMessage )=>void, reject: ()=>void )=>{
		HTTPS.request( authOptions, ( res: IncomingMessage )=>{
			resolve( res );
		});
	});

	console.log(res);
}