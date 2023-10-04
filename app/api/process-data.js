import { generatedText } from '../../lib/aihandler.js';

export default async function (req, res) {
  const { keywords } = req.body;
  res.status(200).json({ response:  await generatedText(keywords)});
}