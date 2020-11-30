function focusInput(event) {
  console.log(event.target.parentNode);
  event.target.parentNode.classList.add('active');
}

function blurInput(event) {
  if (event.target.value == '') {
    event.target.parentNode.classList.remove('active');
  }
}

export { focusInput, blurInput };
