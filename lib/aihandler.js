const openai = require('./openai-config');

export async function generatedText(keywords) {
    console.log(keywords)
  try {
    // Include keywords in your prompt
    const prompt = `
    i will give you locations and characters, write the story in the format below
    ${keywords}

    I want it in json format:
    [
    {
        "Scene": 1,
        "Location": "",
        "Characters": {
        "Left" : "character1",
        "Center" : "Character2",
        "Right" : "Character3"
        },
        "Dialogue": ""
    },
    {
        "Scene": 2,
        "Location": "",
        "Characters": {
        "Left" : "character1",
        "Center" : "Character3",
        "Right" : "Character2"
        },
        "Dialogue": ""
    }
    ]
    `;

    const response = await openai.createCompletion({
        engine: 'text-davinci-002',
        prompt,
        max_tokens: 50, // Adjust the number of tokens as needed
      });

    const result = response.choices[0].text;
    return result;

  } catch (error) {
    console.error('Error interacting with GPT:', error);
    throw error;
  }
}

module.exports = {
    generatedText,
  };
  
