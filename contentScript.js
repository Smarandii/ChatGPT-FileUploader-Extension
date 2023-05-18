// Create 'Submit File' button and add styles
const btn = document.createElement('button');
btn.textContent = 'Submit File';
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
btn.style.padding = '5px';
btn.style.border = 'none';
btn.style.borderRadius = '5px';
btn.style.margin = '5px';

// Create progress element and its child 'progress bar' div
const progressElement = document.createElement('div');
progressElement.style.width = '99%';
progressElement.style.height = '5px';
progressElement.style.backgroundColor = 'grey';
const progressBar = document.createElement('div');
progressBar.style.width = '0%';
progressBar.style.height = '100%';
progressBar.style.backgroundColor = 'blue';
progressElement.appendChild(progressBar);

// Get the target element to insert before
const targetElement = document.querySelector('.flex.flex-col.w-full.py-2.flex-grow.md\\:py-3.md\\:pl-4');

// Insert the elements into the DOM
targetElement.parentNode.insertBefore(btn, targetElement);
targetElement.parentNode.insertBefore(progressElement, targetElement);

async function submitConversation(text, part, filename) {
const textarea = document.querySelector("textarea[tabindex='0']");
const enterKeyEvent = new KeyboardEvent("keydown", {
  bubbles: true,
  cancelable: true,
  keyCode: 13,
});
textarea.value = `Part ${part} of ${filename}: \n\n ${text}`;
textarea.dispatchEvent(enterKeyEvent);
}

// Attach click event listener to the button
btn.addEventListener('click', function() {
// Create input element for file
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.txt,.js,.py,.html,.css,.json,.csv';

// Listen for changes to the file input
fileInput.addEventListener('change', async function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);

  reader.onload = async function() {
    const text = reader.result;
    const chunkSize = 4098;
    const numChunks = Math.ceil(text.length / chunkSize);

    for (let i = 0; i < numChunks; i++) {
      const chunk = text.slice(i*chunkSize, (i+1)*chunkSize);
      await submitConversation(chunk, i+1, file.name);

      // Update the progress bar
      progressBar.style.width = `${((i + 1) / numChunks) * 100}%`;

      // Check if ChatGPT is ready
      let chatgptReady = false;
      while (!chatgptReady) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        chatgptReady = !document.querySelector(".text-2xl > span:not(.invisible)");
      }
    }
    // Change progress bar color to blue after all chunks are submitted
    progressBar.style.backgroundColor = 'blue';
  }
});

// Trigger the file input click event
fileInput.click();
});