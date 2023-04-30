// Create the "Save Prompt" button
const savePromptButton = document.createElement('button');
savePromptButton.textContent = 'Save Prompt';
savePromptButton.id = 'save-prompt-btn';
savePromptButton.style.padding = '2px';
savePromptButton.style.border = 'none';
savePromptButton.style.borderRadius = '20px';
savePromptButton.style.color = '#fff';
savePromptButton.style.backgroundColor = '#6e6e80';
savePromptButton.style.fontSize = '10px';
savePromptButton.style.fontWeight = '150';
savePromptButton.style.marginBottom = '10px';
savePromptButton.style.width = '80px';

// Find the target button element by its class name
const targetButton = document.querySelector('button[class^="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"]');

// Insert the "Save Prompt" button next to the target button
if (targetButton) {
  targetButton.parentNode.insertBefore(savePromptButton, targetButton.nextSibling);
}

// Add an event listener to the "Save Prompt" button
savePromptButton.addEventListener('click', () => {
  const textarea = document.querySelector('textarea[tabindex="0"]');
  const prompt = textarea.value.trim();

  if (prompt !== '') {
    savePromptToFile(prompt);
  }
});

// Function to save prompt text to a file
function savePromptToFile(prompt) {
  const blob = new Blob([prompt], { type: 'text/plain' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = 'saved_prompt.txt';
  a.click();
  URL.revokeObjectURL(url);
}
