import express from "express";
import mongoose from "mongoose";

const app = express();

async function main(){
    try {
        mongoose.connect("");
    } catch (error) {
        console.error(error);
    }
} 

main();

