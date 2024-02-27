import { Client, Account, ID } from 'appwrite';

export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ab578be0a5524a88a0')

export const account = new Account(client);
export { ID };