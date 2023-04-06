const fs = require('fs').promises;
const fss = require('fs')
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

function getEmails() {
    const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

    const TOKEN_PATH = path.join(process.cwd(), './public/javascripts/googleApiConfig/token.json');
    const CREDENTIALS_PATH = path.join(process.cwd(), './public/javascripts/googleApiConfig/credentials.json');
    async function loadSavedCredentialsIfExist() {
        try {
            const content = await fs.readFile(TOKEN_PATH);
            const credentials = JSON.parse(content);
            return google.auth.fromJSON(credentials);
        } catch (err) {
            return null;
        }
    }
    async function saveCredentials(client) {
        const content = await fs.readFile(CREDENTIALS_PATH);
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
            type: 'authorized_user',
            client_id: key.client_id,
            client_secret: key.client_secret,
            refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(TOKEN_PATH, payload);
        }
    async function authorize() {
        let client = await loadSavedCredentialsIfExist();
        if (client) {
            return client;
        }
        client = await authenticate({
            scopes: SCOPES,
            keyfilePath: CREDENTIALS_PATH,
        });
        if (client.credentials) {
            await saveCredentials(client);
        }
        return client;
    }

    // Get an Email by using the ID
    async function getMessageById(auth, message_id='') {
        const gmail = google.gmail({version: 'v1', auth});
        const res = await gmail.users.messages.get({
            userId: 'me',
            id: message_id
        });
        // Print the message's info
        
        console.log('Email snippet:', res.data.snippet);
        console.log('Email body size:', res.data.payload.body.size);
        console.log('Email label ids:', res.data.labelIds);
        // Decode Base64 to ASCII for printing
        try {
            let buff = new Buffer.from(res.data.payload.body.data, 'base64')
            let text = buff.toString('ascii')
            console.log('Email data:', res.text);
        } catch (err) {
            console.log(err)
            console.log('Email data:', res.data);
        }
        const res2 = await gmail.users.getProfile({
            userId:'me'
        })
        console.log("user profile:", res2.data)
    }

    // Get the emails list with their ID (can be used in function "getMessageById")
    async function getEmailsInfo(auth) {
        const gmail = google.gmail({version: 'v1', auth});
        const res = await gmail.users.messages.list({
            userId: 'me',
            labelIds: ['UNREAD'],
            maxResults: 20
        });
        for (i=0;i<5;i++) {
            console.log("id:", res.data.messages[i].id)
            // getMessageById(auth, res.data.messages[i].id) 
        }
        console.log('Unread Email:', res.data);
        getMessageById(auth, '183643a1a1db2344') 

    }
    async function listLabels(auth) {
        const gmail = google.gmail({version: 'v1', auth});
        const res = await gmail.users.labels.list({
            userId: 'me'
        });
        const labels = res.data.labels;
        if (!labels || labels.length === 0) {
            console.log('No labels found.');
            return;
        }
        console.log('Labels:');
        labels.forEach((label) => {
            console.log(`- ${label.name}`);
        });

    }
    authorize().then(listLabels).catch(console.error);
    authorize().then(getEmailsInfo).catch(console.error);
    return ['a', 'b', 'c']
}

module.exports = getEmails