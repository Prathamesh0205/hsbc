// importCsv.ts
"use server"
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
import prismadb from './lib/prismadb';
import { use } from 'react';


const prisma = new PrismaClient();
const csvFilePath = path.resolve(__dirname, 'HSBC.csv');

const importData = async () => {
  
  let users=[];
  
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data',async (row) => {
      // Map CSV row to your database model'
      let hashmap: { [key: string]: string } = {};

      if(hashmap.get(row.customer))
      users.push({
        customer:row.customer,
        zipCodeOri:row.zipCodeOri,
        age: row.age,
        merchants:row.merchants,

      });

      hashmap[row.customer]=row.customer;
   
    
    })
    .on('end', async () => {
      console.log('CSV file successfully processed');
      
      // Insert data into the database
      for (const user of users) {
        await prisma.user.create({
          data: user,
        });
      }

      console.log('Data successfully inserted into the database');
      await prisma.$disconnect();
    });
};

importData().catch((e) => {
  console.error(e);
  process.exit(1);
});
