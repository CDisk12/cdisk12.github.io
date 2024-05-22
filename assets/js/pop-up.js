function toggleImage() {
    // Check if the popup already exists
    if (document.getElementById('popup_container')) {
        return; // Do nothing if it already exists
    }

    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup_container';

    // Create exit button
    const exitButton = document.createElement('div');
    exitButton.id = 'exit';
    exitButton.innerHTML = '&#10005;';
    exitButton.onclick = removePopup;

    // Create title element
    const title = document.createElement('div');
    title.id = 'title';
    title.textContent = '<Profile_Image>';

    // Create image container
    const imagePopupContainer = document.createElement('div');
    imagePopupContainer.id = 'image_popup_container';

    // Create image element
    const image = document.createElement('img');
    image.src = 'assets/images/FB_IMG_1695788474288-removebg-preview.png';
    image.alt = 'profile';

    // Create timer element
    const timer = document.createElement('div');
    timer.id = 'timer';
    timer.style.color = 'red'; // Set color to red
    timer.style.marginTop = '10px'; // Add margin to separate from image

    // Append elements to the image container
    imagePopupContainer.appendChild(image);
    imagePopupContainer.appendChild(timer);

    // Append elements to the popup container
    popupContainer.appendChild(exitButton);
    popupContainer.appendChild(title);
    popupContainer.appendChild(imagePopupContainer);

    // Append popup container to the body
    document.body.appendChild(popupContainer);

    // Start countdown timer
    let secondsRemaining = 360;
    const countdownInterval = setInterval(() => {
        timer.textContent = `Closing in ${secondsRemaining} seconds`;
        secondsRemaining--;
        if (secondsRemaining < 0) {
            clearInterval(countdownInterval);
            removePopup();
        }
    }, 1000); // Update timer every second
}


// Function to create and show popup
function showPopup() {
    // Create popup container elements
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup_container';

    const exitButton = document.createElement('div');
    exitButton.id = 'exit';
    exitButton.innerHTML = '&#10005;';
    exitButton.onclick = removePopup;

    const title = document.createElement('h3');
    title.id = 'text_title';
    title.textContent = 'This is Not Available';

    const content = document.createElement('h3');
    content.id = 'text_content';
    content.textContent = 'The related section is for related projects that the owner has made, such as music, art, novels, etc.';

    const timer = document.createElement('div');
    timer.id = 'timer';
    timer.style.color = 'red'; // Set color to red

    // Append elements to popup container
    popupContainer.appendChild(exitButton);
    popupContainer.appendChild(title);
    popupContainer.appendChild(content);
    popupContainer.appendChild(timer);

    // Append popup container to the body
    document.body.appendChild(popupContainer);

    // Start countdown timer
    let secondsRemaining = 5;
    const countdownInterval = setInterval(() => {
        timer.textContent = `Closing in ${secondsRemaining} seconds`;
        secondsRemaining--;
        if (secondsRemaining < 0) {
            clearInterval(countdownInterval);
            removePopup();
        }
    }, 1000); // Update timer every second
}

function removePopup() {
    const popupContainer = document.getElementById('popup_container');
    if (popupContainer) {
        popupContainer.style.animation = 'scaleDown 0.5s forwards';
        popupContainer.addEventListener('animationend', () => {
            popupContainer.remove();
        });
    }
}
