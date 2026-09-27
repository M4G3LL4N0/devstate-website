document.getElementById("scan-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("scan-out").hidden = false;
});

document.getElementById("request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent("DevState access notes request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`,
  );
  const status = document.getElementById("request-status");
  status.hidden = false;
  status.textContent =
    "This page does not send mail. Your mail client will open with a draft.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
