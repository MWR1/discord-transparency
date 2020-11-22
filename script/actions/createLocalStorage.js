export default function createLocalStorage() {
  const localStorageIframe = document.createElement("iframe");
  localStorageIframe.style.display = "none";
  document.body.appendChild(localStorageIframe);
  window.localStorage = localStorageIframe.contentWindow.localStorage;
}
