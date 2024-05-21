document.addEventListener("DOMContentLoaded", function() {
    const indicator = document.getElementById("indicator");
    const radios = document.querySelectorAll("#item_container input[type='radio']");
    const labels = document.querySelectorAll("#item_container label");
    const positions = [0, 33, 68];
    let checkedIndex = 0; // Track the index of the currently checked radio button

    function moveIndicator(index) {
        indicator.style.left = `${positions[index]}%`;
    }

    function handleInteraction(index) {
        radios[index].addEventListener("change", function() {
            moveIndicator(index);
            checkedIndex = index; // Update the checked index
        });

        labels[index].addEventListener("mouseenter", function() {
            moveIndicator(index);
        });

        labels[index].addEventListener("mouseleave", function() {
            moveIndicator(checkedIndex); // Move back to the checked index after hovering
        });
    }

    radios.forEach((radio, index) => {
        handleInteraction(index);
    });

    moveIndicator(0); // Initial positioning
});
