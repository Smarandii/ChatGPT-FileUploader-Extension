# Submit File Chrome Extension

This is a Chrome extension for submitting file content into a conversation in chunks. The user can select a file, and the content is then divided into chunks and submitted into the conversation.

## Contents

- `contentScript.js`: This is the main JavaScript file for the extension. It creates a "Submit File" button and progress bar on the webpage, and handles file input, reading, chunking, and submission.
- `manifest.json`: This is the manifest file for the Chrome extension. It defines basic metadata about the extension like its name and version, and specifies what scripts to run.

## How to Install

### Google Chrome
1. Download or clone this repository.
2. Go to the Chrome extensions page (`chrome://extensions`).
3. Enable Developer mode (toggle switch in the top right corner).
4. Click on "Load unpacked" and select the directory containing the repository files.

### Microsoft Edge
1. Download or clone this repository.
2. Go to the Edge extensions page (`edge://extensions`).
3. Enable Developer mode (toggle switch in the bottom left corner).
4. Click on "Load unpacked" and select the directory containing the repository files.

## How to Use

1. After installing the extension, navigate to a webpage where you want to submit a file.
2. You'll see a "Submit File" button. Click it to open the file selection dialog.
3. Select a file (`.txt`, `.js`, `.py`, `.html`, `.css`, `.json`, or `.csv`).
4. The file content is read, split into chunks, and submitted into a conversation.
5. A progress bar shows the progress of the file submission.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.
