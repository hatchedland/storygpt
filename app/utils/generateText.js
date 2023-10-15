import openai from '../../openai-config'

export default async function generatedText(keywords) {
  console.log(keywords);
  try {
    // Include keywords in your prompt
    const prompt = `
    Act as a script writer and write a story.
    i will give you locations and characters, write the story in the format below.
    Generate as many scenes so that the story makes sense
    ${keywords}

    I want it in json format like below:{"result":[{"Scene":1,"Location":"","Characters":{"Left":"character1","Center":"Character2","Right":"Character3"},"Dialogue":""},{"Scene":2,"Location":"","Characters":{"Left":"character1","Center":"Character3","Right":"Character2"},"Dialogue":""},]}
    `;

    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt,
      max_tokens: 1000, // Adjust the number of tokens as needed
    });

    const result = response.choices[0].text.trim();
    return result;

  } catch (error) {
    console.error("Error interacting with GPT:", error);
    throw error;
  }
}
