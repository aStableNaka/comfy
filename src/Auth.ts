import * as JWT from "jsonwebtoken";
import * as HTTPS from "https";
import { IncomingMessage } from "http";


/**
 * 
 * @param token API Token
 */
export async function Authenticate( token: string, callback:( res: IncomingMessage )=>{} ): Promise<void>{
	const authOptions = {
		hostname: "comfy.auth.na-ka.us",
		port: 8080,
		path: "/",
		method: "GET"
	}

	const res = await new Promise(( resolve: ( res:IncomingMessage )=>void, reject: ()=>void )=>{
		HTTPS.request( authOptions, ( res: IncomingMessage )=>{
			console.warn( res );
			resolve( res );
		});
	});

	console.log(res);
}