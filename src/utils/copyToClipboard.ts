function copyToClipboard(string?: string) {
  if (!string || typeof string !== 'string') return;

  if (!document?.body) return;

  if (!navigator?.clipboard) return;

  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = string;

  input.select();
  input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value);

  document.body.removeChild(input);
  
}

export default copyToClipboard;
