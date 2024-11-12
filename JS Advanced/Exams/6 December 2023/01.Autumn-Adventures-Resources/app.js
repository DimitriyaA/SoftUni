window.addEventListener('load', solve);

function solve() {
    // Get references to various DOM elements by their IDs
    let timeElement = document.getElementById('time');
    let dateElement = document.getElementById('date');
    let placeElement = document.getElementById('place');
    let eventElement = document.getElementById('event-name');
    let emailElement = document.getElementById('email');
    let btnElement = document.getElementById('add-btn');

    let adventureListElement = document.getElementById('check-list');
    let upcomingListElement = document.getElementById('upcoming-list');
    let finishedListElement = document.getElementById('finished-list');

    // Add an event listener to the add button
    btnElement.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if any of the input fields are empty
        if (
            timeElement.value == '' ||
            dateElement.value == '' ||
            placeElement.value == '' ||
            eventElement.value == '' ||
            emailElement.value == ''
        ) {
            return; // If any field is empty, exit the function
        }

        // Create elements to display the adventure information
        let articleElementInfo = document.createElement('article');
        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'event-content');

        // Create and append paragraphs with adventure details
        let begin = document.createElement('p');
        begin.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`;

        let place = document.createElement('p');
        place.textContent = `In: ${placeElement.value}`;

        let event = document.createElement('p');
        event.textContent = `Event: ${eventElement.value}`;

        let email = document.createElement('p');
        email.textContent = `Contact: ${emailElement.value}`;

        // Create and append edit and continue buttons
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        // Append all ticket details and buttons to the article and list elements
        articleElementInfo.appendChild(begin);
        articleElementInfo.appendChild(place);
        articleElementInfo.appendChild(event);
        articleElementInfo.appendChild(email);

        // Create a container for buttons
        let btnContainer = document.createElement('div'); // Add container for buttons
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(continueBtn);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(btnContainer); // append button container

        // Add the complete adventure info to the ticket list element
        adventureListElement.appendChild(liElementInfo);

        // Save the current input values for editing
        let editedTimeElement = timeElement.value;
        let editedDateElement = dateElement.value;
        let editedPlaceElement = placeElement.value;
        let editedEventElement = eventElement.value;
        let editedEmailElement = emailElement.value;

        // Clear the input fields
        timeElement.value = '';
        dateElement.value = '';
        placeElement.value = '';
        eventElement.value = '';
        emailElement.value = '';

        // Disable the add button after adding an adventure
        btnElement.disabled = true;

        // Add event listener for the Edit button
        editBtn.addEventListener('click', onEdit);
        function onEdit() {

            // Restore the saved input values to the form fields
            timeElement.value = editedTimeElement;
            dateElement.value = editedDateElement;
            placeElement.value = editedPlaceElement;
            eventElement.value = editedEventElement;
            emailElement.value = editedEmailElement;

            // Remove the adventure from the last check list
            liElementInfo.remove();

            // Enable the button
            btnElement.disabled = false;
        }

        // Add event listener for the continue button
        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            // Create a new list item for upcoming list
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'event-content');

            let articleElementContinue = document.createElement('article');
            articleElementContinue = articleElementInfo;

            // Create Move to Finished button
            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'finished-btn');
            confirmBtn.textContent = 'Move to Finished';

            // Append the article and new button to the new list item
            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);
            liElementInfo.remove(); // Remove the original list item from the check list

            // Add the new list item to the upcoming list
            upcomingListElement.appendChild(liElementconfirm);
            btnElement.disabled = false; // Enable the add button

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                // Create a new list item for finished list
                let liElementResolved = document.createElement('li');
                liElementResolved.setAttribute('class', 'event-content');

                let articleElementResolved = document.createElement("article");
                articleElementResolved = articleElementContinue;

                // Get reference to the Clear button
                const clearBtn = document.getElementById('clear');
                clearBtn.addEventListener('click', onClear);

                // Append the cloned article to the new list item
                liElementResolved.appendChild(articleElementResolved);
                liElementconfirm.remove(); // Remove the original list item from the upcoming list

                finishedListElement.appendChild(liElementResolved); // Add the new list item to the finished list

                function onClear() {
                    liElementResolved.remove(); // Remove the list item from the finished list
                    btnElement.disabled = false; // Enable the add button

                }
            }
        }
    }
}