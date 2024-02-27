import { Client, Account, ID, sdk } from "appwrite";

const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65ab578be0a5524a88a0') // Your project ID
    .setKey('7520588a0923599e2177638944e34c22effd799b15e8bed98a045511a02b242221097232f39f5665eccde8430ad65bd4039f77ee4fca4a974d8f0c62723d73443e49052e0c3887afe453523ea631174aaec7c10dfbf2c27f6bcbdaddffc6f8d20f6c174431b496c9fcd6991f2b45a3419aa5db4e60fd96b6af893baeaa10dd73');

const promise = users.list();
