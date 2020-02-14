export default function() {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.onload = _ =>
    (window.localStorage = iframe.contentWindow.localStorage);
  document.body.appendChild(iframe);
}
