window.addEventListener('load', solve);

function solve() {
    // Get references to various DOM elements by their IDs
    let ticketNumElement = document.getElementById('num-tickets');
    let seatingElement = document.getElementById('seating-preference');
    let nameElement = document.getElementById('full-name');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone-number');
    let btnElement = document.getElementById('purchase-btn');
    let ticketListElement = document.getElementById('ticket-preview');
    let purchasedListElement = document.getElementById('ticket-purchase');
    let bottomElement = document.querySelector('.bottom-content');

    // Add an event listener to the "Purchase" button
    btnElement.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if any of the input fields are empty
        if (
            ticketNumElement.value == '' ||
            seatingElement.value == '' ||
            nameElement.value == '' ||
            emailElement.value == '' ||
            phoneElement.value == ''
        ) {
            return; // If any field is empty, exit the function
        }

        // Create elements to display the ticket information
        let articleElementInfo = document.createElement('article');
        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'ticket-purchase');
        let btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'btn-container');

        // Create and append paragraphs with ticket details
        let ticketNumber = document.createElement('p');
        ticketNumber.textContent = `Count: ${ticketNumElement.value}`;

        let seatingPref = document.createElement('p');
        seatingPref.textContent = `Preference: ${seatingElement.value}`;

        let fullName = document.createElement('p');
        fullName.textContent = `To: ${nameElement.value}`;

        let email = document.createElement('p');
        email.textContent = `Email: ${emailElement.value}`;

        let pNumber = document.createElement('p');
        pNumber.textContent = `Phone Number: ${phoneElement.value}`;

        // Create and append Edit and Next buttons
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let nextBtn = document.createElement('button');
        nextBtn.setAttribute('class', 'next-btn');
        nextBtn.textContent = 'Next';

        // Append all ticket details and buttons to the article and list elements
        articleElementInfo.appendChild(ticketNumber);
        articleElementInfo.appendChild(seatingPref);
        articleElementInfo.appendChild(fullName);
        articleElementInfo.appendChild(email);
        articleElementInfo.appendChild(pNumber);

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(nextBtn);

        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(btnContainer);

        // Add the complete ticket info to the ticket list element
        ticketListElement.appendChild(liElementInfo);

        // Save the current input values for editing
        let editedticketNumElement = ticketNumElement.value;
        let editedseatingElement = seatingElement.value;
        let editednameElement = nameElement.value;
        let editedemailElement = emailElement.value;
        let editedphoneElement = phoneElement.value;

        // Clear the input fields
        ticketNumElement.value = '';
        seatingElement.value = '';
        nameElement.value = '';
        emailElement.value = '';
        phoneElement.value = '';

        // Disable the purchase button after adding a ticket
        btnElement.disabled = true;

        // Add event listener for the Edit button
        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            // Restore the saved input values to the form fields
            ticketNumElement.value = editedticketNumElement;
            seatingElement.value = editedseatingElement;
            nameElement.value = editednameElement;
            emailElement.value = editedemailElement;
            phoneElement.value = editedphoneElement;

            // Remove the ticket from the preview list
            liElementInfo.remove();

            // Enable the purchase button
            btnElement.disabled = false;
        }

        // Add event listener for the Next button
        nextBtn.addEventListener('click', onNext);

        function onNext() {
            // Create new list element for the confirmed ticket
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'ticket-purchase');

            let articleElementContinue = document.createElement('article');
            articleElementContinue = articleElementInfo;

            // Create and append Buy button
            let buyBtn = document.createElement('button');
            buyBtn.setAttribute('class', 'buy-btn');
            buyBtn.textContent = 'Buy';

            articleElementContinue.appendChild(buyBtn);
            liElementconfirm.appendChild(articleElementContinue);

            // Remove the ticket from the preview list
            liElementInfo.remove();

            // Add the ticket to the purchased list
            purchasedListElement.appendChild(liElementconfirm);

            // Add event listener for the Buy button
            buyBtn.addEventListener('click', onBuy);

            function onBuy() {
                // Remove the ticket from the purchased list
                liElementconfirm.remove();

                // Create and append a thank you message and back button
                let backBtn = document.createElement('button');
                backBtn.setAttribute('class', 'back-btn');
                backBtn.textContent = 'Back';

                let text = document.createElement('h2');
                text.textContent = `Thank you for your purchase!`;
                bottomElement.appendChild(text);
                bottomElement.appendChild(backBtn);

                // Add event listener for the Back button
                backBtn.addEventListener('click', onCancel);
                function onCancel() {
                    // Reload the page when Back button is clicked
                    window.location.reload();
                }
            }
        }
    }
}