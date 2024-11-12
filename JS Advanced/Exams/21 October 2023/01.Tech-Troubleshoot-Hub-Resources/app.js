window.addEventListener('load', solution);

function solve() {
  const employeeElement = document.getElementById('employee');
  const categoryElement = document.getElementById('category');
  const urgencyElement = document.getElementById('urgency');
  const teamElement = document.getElementById('team');
  const descriptionElement = document.getElementById('description');
  const addButtonElement = document.getElementById('add-btn');

  const previewList = document.querySelector('.preview-list');

  addButtonElement.addEventListener('click', onNext);

  function onNext(e) {
    e.preventDefault();
    if (employeeElement.value == '' ||
      categoryElement.value == '' ||
      urgencyElement.value == '' ||
      teamElement.value == '' ||
      descriptionElement.value == '') {
      return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('problem-content');

    const article = document.createElement('article');

    const employeeP = document.createElement('p');
    employeeP.textContent = `From: ${employeeElement.value}`;

    const categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryElement.value}`;

    const urgencyP = document.createElement('p');
    urgencyP.textContent = `Urgency: ${urgencyElement.value}`;

    const teamP = document.createElement('p');
    teamP.textContent = `Assigned to: ${teamElement.value}`;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = `Description: ${descriptionElement.value}`;

    article.appendChild(employeeP);
    article.appendChild(categoryP);
    article.appendChild(urgencyP);
    article.appendChild(teamP);
    article.appendChild(descriptionP);

    listItem.appendChild(article);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.setAttribute('class', 'continue-btn');
    continueBtn.textContent = 'Continue';

    listItem.appendChild(editBtn);
    listItem.appendChild(continueBtn);

    previewList.appendChild(listItem);

    let editedEmployee = employeeElement.value;
    let editedCategory = categoryElement.value;
    let editedUrgency = urgencyElement.value;
    let editedTeam = teamElement.value;
    let editedDescription = descriptionElement.value;

    clearFields();

    addButtonElement.disabled = true;

    editBtn.addEventListener('click', function () {
      onEdit(editedEmployee, editedCategory, editedUrgency, editedTeam, editedDescription, listItem);
    });

    continueBtn.addEventListener('click', function () {
      onContinue(listItem);
    });
  }

  function onEdit(editedEmployee, editedCategory, editedUrgency, editedTeam, editedDescription, listItem) {

    employeeElement.value = editedEmployee;
    categoryElement.value = editedCategory;
    urgencyElement.value = editedUrgency;
    teamElement.value = editedTeam;
    descriptionElement.value = editedDescription;

    listItem.remove();
    addButtonElement.disabled = false;

  }

  function onContinue(listItem) {

    const pendingList = document.querySelector('.pending-list');

    const pendingListItem = listItem.cloneNode(true);
    pendingListItem.querySelector('.edit-btn').remove();
    pendingListItem.querySelector('.continue-btn').remove();

    const resolveBtn = document.createElement('button');
    resolveBtn.textContent = 'Resolved';
    resolveBtn.classList.add('resolve-btn');

    pendingListItem.appendChild(resolveBtn);

    listItem.remove();
    pendingList.appendChild(pendingListItem);

    resolveBtn.addEventListener('click', function () {
      onResolveItem(pendingListItem);
    });

  }

  function onResolveItem(pendingListItem) {

    const resolvedList = document.querySelector('.resolved-list');

    const resolvedListItem = pendingListItem.cloneNode(true);

    resolvedListItem.querySelector('.resolve-btn').remove();

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    clearBtn.classList.add('clear-btn');

    resolvedListItem.appendChild(clearBtn);

    pendingListItem.remove();

    resolvedList.appendChild(resolvedListItem);

    clearBtn.addEventListener('click', function () {
      resolvedListItem.remove();
    });

  }

  function clearFields() {
    employeeElement.value = '';
    categoryElement.value = '';
    urgencyElement.value = '';
    teamElement.value = '';
    descriptionElement.value = '';

    addButtonElement.disabled = false; // Re-enable add button
  }
}
