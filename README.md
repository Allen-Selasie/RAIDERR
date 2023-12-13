# AI Assistant Terminal Application

This is a simple terminal-based AI assistant powered by the OpenAI GPT-3.5 Turbo model. It allows you to interact with the AI by entering prompts or questions in the terminal.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your-api-key-here
   ```

## Usage

1. Run the application:

   ```bash
   node raiderr.js
   ```

2. Type your questions or prompts in the terminal and press Enter.

3. Type 'exit' or 'bye' to close the program.

## Important Note

- The application uses OpenAI GPT-3.5 Turbo, and you need a valid OpenAI API key to use this service. Obtain your API key from the [OpenAI website](https://beta.openai.com/signup/) and replace the placeholder in the `.env` file.

## Error Handling

- The application handles errors, including API rate limit issues. If the API rate limit is reached, it will display a message asking you to try again later.

Feel free to customize and enhance the functionality of the AI assistant according to your needs.
