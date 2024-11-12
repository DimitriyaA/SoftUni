window.addEventListener('load', solve);

function solve() {

    // Get references to various DOM elements by their IDs
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contactNumberElement = document.getElementById('contact-number');
    const classTypeElement = document.getElementById('class-type');
    const classTimeElement = document.getElementById('class-time');
    const nextBtnElement = document.getElementById('next-btn');
    const classInfoElement = document.querySelector('.class-info');
    const confirmClassElement = document.querySelector('.confirm-class');

    nextBtnElement.addEventListener('click', onAdd);

    function onAdd(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if any of the input fields are empty
        if (
            nameElement.value.trim() === '' ||
            emailElement.value.trim() === '' ||
            contactNumberElement.value.trim() === '' ||
            classTypeElement.value.trim() === '' ||
            classTimeElement.value.trim() === ''
        ) {
            return; // If any field is empty, exit the function
        }

        // Create elements to display the class information
        let liElementInfo = document.createElement('li');

        let nameInfo = document.createElement('p');
        nameInfo.textContent = `Name: ${nameElement.value}`;

        let emailInfo = document.createElement('p');
        emailInfo.textContent = `Email: ${emailElement.value}`;

        let contactInfo = document.createElement('p');
        contactInfo.textContent = `Phone Number: ${contactNumberElement.value}`;

        let classTypeInfo = document.createElement('p');
        classTypeInfo.textContent = `Class: ${classTypeElement.value}`;

        let classTimeInfo = document.createElement('p');
        classTimeInfo.textContent = `Time: ${classTimeElement.value}`;

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        liElementInfo.appendChild(nameInfo);
        liElementInfo.appendChild(emailInfo);
        liElementInfo.appendChild(contactInfo);
        liElementInfo.appendChild(classTypeInfo);
        liElementInfo.appendChild(classTimeInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);

        classInfoElement.appendChild(liElementInfo);

        // Save the current input values for editing
        let editedNameElement = nameElement.value;
        let editedEmailElement = emailElement.value;
        let editedContactNumberElement = contactNumberElement.value;
        let editedClassTypeElement = classTypeElement.value;
        let editedClassTimeElement = classTimeElement.value;

        // Clear the input fields
        nameElement.value = '';
        emailElement.value = '';
        contactNumberElement.value = '';
        classTypeElement.value = '';
        classTimeElement.value = '';

        // Disable the next button after adding a class info
        nextBtnElement.disabled = true;

        // Add event listener for the Edit button
        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            // Restore the saved input values to the form fields
            nameElement.value = editedNameElement;
            emailElement.value = editedEmailElement;
            contactNumberElement.value = editedContactNumberElement;
            classTypeElement.value = editedClassTypeElement;
            classTimeElement.value = editedClassTimeElement;

            // Remove the class info from the preview list
            liElementInfo.remove();

            // Enable the next button
            nextBtnElement.disabled = false;
        }

        // Add event listener for the Continue button
        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            // Create new list element for the confirmed class info
            let liElementConfirm = document.createElement('li');
            liElementConfirm.setAttribute('class', 'continue-info');

            let nameConfirmInfo = document.createElement('p');
            nameConfirmInfo.textContent = `Name: ${editedNameElement}`;

            let emailConfirmInfo = document.createElement('p');
            emailConfirmInfo.textContent = `Email: ${editedEmailElement}`;

            let contactConfirmInfo = document.createElement('p');
            contactConfirmInfo.textContent = `Phone Number: ${editedContactNumberElement}`;

            let classTypeConfirmInfo = document.createElement('p');
            classTypeConfirmInfo.textContent = `Class: ${editedClassTypeElement}`;

            let classTimeConfirmInfo = document.createElement('p');
            classTimeConfirmInfo.textContent = `Time: ${editedClassTimeElement}`;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            liElementConfirm.appendChild(nameConfirmInfo);
            liElementConfirm.appendChild(emailConfirmInfo);
            liElementConfirm.appendChild(contactConfirmInfo);
            liElementConfirm.appendChild(classTypeConfirmInfo);
            liElementConfirm.appendChild(classTimeConfirmInfo);
            liElementConfirm.appendChild(confirmBtn);
            liElementConfirm.appendChild(cancelBtn);

            confirmClassElement.appendChild(liElementConfirm);

            // Remove the class info from the preview list
            liElementInfo.remove();

            // Add event listener for the Confirm button
            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                // Remove the main div and add the thank you message and Done button
                document.getElementById('main').remove();

                let thankYouMessage = document.createElement('h1');
                thankYouMessage.setAttribute('id', 'thank-you');
                thankYouMessage.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                let doneBtn = document.createElement('button');
                doneBtn.setAttribute('id', 'done-btn');
                doneBtn.textContent = 'Done';

                document.body.appendChild(thankYouMessage);
                document.body.appendChild(doneBtn);

                doneBtn.addEventListener('click', () => {
                    window.location.reload();
                });
            }

            // Add event listener for the Cancel button
            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {
                // Remove the class info from the confirm list
                liElementConfirm.remove();

                // Enable the next button
                nextBtnElement.disabled = false;
            }
        }
    }
}





