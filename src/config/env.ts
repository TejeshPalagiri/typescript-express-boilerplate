import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';

// Check if the .env exists
if(fs.existsSync(path.join(__dirname, '../../.env'))) {
    console.log('Supplying environment variables from .env');
} else if(fs.existsSync(path.join(__dirname, '../../.env.example'))) {
    console.log('Supplying environment variables from .env.example');
} else {
    console.log('Stopping the server since no environment config provided.');
    process.exit(0);
}

export const PORT = process.env.PORT || 3000;
export const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
export const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET || 'JgDatenwishdaj&whwhjq#eushshwj@dhshaDarq'; 
export const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET || 'JgDatenwishdaj&whwhjq#eushshwj@dhshaDarq'; 