window.addEventListener("load", solve);

function solve() {
	let snowmanNameElement = document.getElementById("snowman-name");
	let snowmanHeightElement = document.getElementById("snowman-height");
	let locationElement = document.getElementById("location");
	let creatorNameElement = document.getElementById("creator-name");
	let attributeElement = document.getElementById("special-attribute");
	let addBtnElement = document.querySelector(".add-btn");
	let snowListElement = document.querySelector(".snowman-preview");
	let showSnowmanElement = document.querySelector(".snow-list");
	let main = document.getElementById("hero");
	let bodyElement = document.querySelector("body"); // Use body directly instead of a class
	let backImg = document.getElementById("back-img");

	addBtnElement.addEventListener("click", onAdd);

	function onAdd(e) {
		e.preventDefault();
		if (
			snowmanNameElement.value === "" ||
			snowmanHeightElement.value === "" ||
			locationElement.value === "" ||
			creatorNameElement.value === "" ||
			attributeElement.value === ""
		) {
			return;
		}

		let liElementInfo = document.createElement("li");
		liElementInfo.className = "snowman-info";

		let articleElementInfo = document.createElement("article");

		let snowmanName = document.createElement("p");
		snowmanName.textContent = `Name: ${snowmanNameElement.value}`;

		let snowmanHeight = document.createElement("p");
		snowmanHeight.textContent = `Height: ${snowmanHeightElement.value}`;

		let location = document.createElement("p");
		location.textContent = `Location: ${locationElement.value}`;

		let creator = document.createElement("p");
		creator.textContent = `Creator: ${creatorNameElement.value}`;

		let attribute = document.createElement("p");
		attribute.textContent = `Attribute: ${attributeElement.value}`;

		articleElementInfo.append(snowmanName, snowmanHeight, location, creator, attribute);

		let btnContainer = document.createElement("div");
		btnContainer.className = "btn-container";

		let editBtn = document.createElement("button");
		editBtn.className = "edit-btn";
		editBtn.textContent = "Edit";

		let nextBtn = document.createElement("button");
		nextBtn.className = "next-btn";
		nextBtn.textContent = "Next";

		btnContainer.append(editBtn, nextBtn);

		liElementInfo.append(articleElementInfo, btnContainer);
		snowListElement.appendChild(liElementInfo);

		// Save the current input values for editing
		let editedSnowmanName = snowmanNameElement.value;
		let editedHeight = snowmanHeightElement.value;
		let editedLocation = locationElement.value;
		let editedCreator = creatorNameElement.value;
		let editedAttribute = attributeElement.value;

		// Clear the input fields
		snowmanNameElement.value = "";
		snowmanHeightElement.value = "";
		locationElement.value = "";
		creatorNameElement.value = "";
		attributeElement.value = "";

		addBtnElement.disabled = true;

		editBtn.addEventListener("click", onEdit);
		nextBtn.addEventListener("click", onNext);

		function onEdit() {
			snowmanNameElement.value = editedSnowmanName;
			snowmanHeightElement.value = editedHeight;
			locationElement.value = editedLocation;
			creatorNameElement.value = editedCreator;
			attributeElement.value = editedAttribute;

			liElementInfo.remove();
			addBtnElement.disabled = false;
		}

		function onNext() {
			let liElementConfirm = document.createElement("li");
			liElementConfirm.className = "snowman-content";

			let articleElementContinue = document.createElement("article");
			articleElementContinue.innerHTML = articleElementInfo.innerHTML;

			let sendBtn = document.createElement("button");
			sendBtn.className = "send-btn";
			sendBtn.textContent = "Send";

			let btnContainerContinue = document.createElement("div");
			btnContainerContinue.className = "btn-container";
			btnContainerContinue.appendChild(sendBtn);

			liElementConfirm.append(articleElementContinue, btnContainerContinue);

			liElementInfo.remove();
			showSnowmanElement.appendChild(liElementConfirm);

			sendBtn.addEventListener("click", onConfirm);

			function onConfirm() {
				main.remove();

				let backBtn = document.createElement("button");
				backBtn.className = "back-btn";
				backBtn.textContent = "Back";

				backImg.hidden = false;
				bodyElement.appendChild(backBtn);

				backBtn.addEventListener("click", onBack);
			}

			function onBack() {
				window.location.reload();
			}
		}
	}
}
