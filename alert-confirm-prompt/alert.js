const alertUser = () => {
  alert("Alert Desh na kn");
};

const confirmUser = () => {
  const result = confirm("Are you sure?");
  if (result === true) {
    alert("Yes");
  } else {
    alert("No");
  }
};

const promptUser = () => {
  const name = prompt("Enter your name");
  alert(`Hello ${name}`);
};
