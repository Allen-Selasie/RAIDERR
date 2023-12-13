require("dotenv").config();
const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const readline = require("readline");
//creating terminal interface for assistant
const terminalUi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Type 'exit' or 'bye' to close the program.");
console.log(">>Hello Boss.");

//initializing the interface
terminalUi.prompt();
try {
  //error handling
  // AI response logic

  terminalUi.on("line", async (input) => {
    if (input.trim() === "") {
      console.log("Please enter a question or prompt.");
      terminalUi.prompt();
    } else if (
      input.toLowerCase() === "exit" ||
      input.toLowerCase() === "bye"
    ) {
      console.log("Goodbye! Have a great day.");
      terminalUi.close();
    } else {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant called RAIDERR and you address your user as boss.",
          },
          { role: "user", content: input },
        ],
      });
      console.log(`\n>>${result.choices[0].message.content}\n`);
      terminalUi.prompt();
    }
  });
} catch (error) {
  //catching the error so not to disrupt service if (error.response && error.response.status === 429) {
  if (error.response && error.response.status === 429) {
    console.error("API rate limit reached. Please try again later.");
  } else {
    console.error("An error occurred:", error.message);
  }
  terminalUi.prompt();
}
