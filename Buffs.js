function toggleDetails(selectedValue) {
  const allDetails = document.querySelectorAll('.hidden-details');

  allDetails.forEach(element => {
    element.style.display = 'none';
  });

  const selectedElementId = selectedValue + '-details';
  const elementToShow = document.getElementById(selectedElementId);

  if (elementToShow) {
    elementToShow.style.display = 'block'; 
  }
}

const selectElement = document.getElementById('buffs');

selectElement.addEventListener('change', (event) => {
  // console.log(selectElement.value);
  toggleDetails(event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    toggleDetails(selectElement.value);
});

// console.log("I work!");

