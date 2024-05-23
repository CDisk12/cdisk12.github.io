document.addEventListener("DOMContentLoaded", function() {
    const indicator = document.getElementById("indicator");
    const radios = document.querySelectorAll("#item_container input[type='radio']");
    const labels = document.querySelectorAll("#item_container label");
    const positions = [0, 33, 68];
    let checkedIndex = 0; // Track the index of the currently checked radio button
    let lastCheckedIndex = 0; // Track the index of the last checked radio button

    function moveIndicator(index) {
        indicator.style.left = `${positions[index]}%`;
    }

    function handleInteraction(index) {
        radios[index].addEventListener("change", function() {
            moveIndicator(index);
            lastCheckedIndex = checkedIndex; // Update the last checked index
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

    // Function to return to the last checked radio button
    function returnToLastChecked() {
        radios[lastCheckedIndex].checked = true;
        moveIndicator(lastCheckedIndex);
        checkedIndex = lastCheckedIndex;
    }

    // Function to handle radio button change for relateRadio
    const relateRadio = document.getElementById('Relate');
    relateRadio.addEventListener('change', function() {
        showPopup();
        returnToLastChecked();
    });
});

document.querySelectorAll('input[name="item_select"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        document.getElementById('selection_container').style.display = this.id === 'Home' ? 'flex' : 'none';
        document.getElementById('Project_Content').style.display = this.id === 'Project' ? 'flex' : 'none';
        document.getElementById('Relate_Content').style.display = this.id === 'Relate' ? 'flex' : 'none';
    });
});

// Trigger the change event on page load to set the correct display
document.querySelector('input[name="item_select"]:checked').dispatchEvent(new Event('change'));
