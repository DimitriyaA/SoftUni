window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let fromDateElement = document.getElementById('from-date');
    let toDateElement = document.getElementById('to-date');
    let addBtnElement = document.getElementById('next-btn');
    let vacationInfoList = document.querySelector('.info-list');
    let vacationConfirmList = document.querySelector('.confirm-list');
    let statusElement = document.getElementById('status');


    addBtnElement.addEventListener('click', onNext);


    statusElement.addEventListener('click', onBack);

    function onNext(e) {
        e.preventDefault();


        if (
            firstNameElement.value === '' ||
            lastNameElement.value === '' ||
            fromDateElement.value === '' ||
            toDateElement.value === ''
        ) {
            return;
        }


        let fromDateValue = new Date(fromDateElement.value);
        let toDateValue = new Date(toDateElement.value);
        if (fromDateValue >= toDateValue) {
            return;
        }


        let liElementInfo = document.createElement('li');
        liElementInfo.className = 'vacation-content';

        let articleElementInfo = document.createElement('article');

        let fullName = document.createElement('h3');
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let fromDate = document.createElement('p');
        fromDate.textContent = `From date: ${fromDateElement.value}`;

        let toDate = document.createElement('p');
        toDate.textContent = `To date: ${toDateElement.value}`;

        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        let btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';
        btnContainer.append(editBtn, continueBtn);

        articleElementInfo.append(fullName, fromDate, toDate);
        liElementInfo.append(articleElementInfo, btnContainer);
        vacationInfoList.appendChild(liElementInfo);


        let editedFirstName = firstNameElement.value;
        let editedLastName = lastNameElement.value;
        let editedFromDate = fromDateElement.value;
        let editedToDate = toDateElement.value;


        firstNameElement.value = '';
        lastNameElement.value = '';
        fromDateElement.value = '';
        toDateElement.value = '';


        addBtnElement.disabled = true;


        editBtn.addEventListener('click', onEdit);

        function onEdit() {

            firstNameElement.value = editedFirstName;
            lastNameElement.value = editedLastName;
            fromDateElement.value = editedFromDate;
            toDateElement.value = editedToDate;

            liElementInfo.remove();

            addBtnElement.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            let liElementConfirm = document.createElement('li');
            liElementConfirm.className = 'vacation-content';

            let articleElementContinue = document.createElement('article');
            articleElementContinue.innerHTML = articleElementInfo.innerHTML;

            let confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            let btnContainerConfirmOrCancel = document.createElement('div');
            btnContainerConfirmOrCancel.className = 'btn-container';
            btnContainerConfirmOrCancel.append(confirmBtn, cancelBtn);

            liElementConfirm.append(articleElementContinue, btnContainerConfirmOrCancel);

            liElementInfo.remove();

            vacationConfirmList.appendChild(liElementConfirm);

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {

                liElementConfirm.remove();

                statusElement.className = 'vacation-confirmed';
                statusElement.textContent = 'Vacation Requested';

                addBtnElement.disabled = false;
            }

            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {

                liElementConfirm.remove();

                statusElement.className = 'vacation-cancelled';
                statusElement.textContent = 'Cancelled Vacation';

                addBtnElement.disabled = false;
            }
        }
    }

    function onBack() {
        window.location.reload();
    }
}