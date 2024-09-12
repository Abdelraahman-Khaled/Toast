let toastBox = document.getElementById("toastBox");
let successMsg = `<img src="checked.png">
Successfully submitted`;
let errorMsg = ` <img src="cancel.png"> Please fix the error !`;
let InvalidMsg = `<img src="exclamation-mark.png"> Invalid input , check again`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5200);
}
