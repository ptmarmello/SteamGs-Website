
const mailPublic = process.env.MJ_APIKEY_PUBLIC;
const mailPrivate = process.env.MJ_APIKEY_PRIVATE;

const mailjet = require ('node-mailjet')
.connect(mailPublic, mailPrivate)

export default mailjet;