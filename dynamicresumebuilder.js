var educationEntries = [];
var experienceEntries = [];
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var emailElement = document.getElementById('email');
    var contactnoElement = document.getElementById('contactno');
    var emailErrorElement = document.getElementById('emailError');
    var contactnoErrorElement = document.getElementById('contactnoError');
    // Add event listeners for real-time validation
    emailElement === null || emailElement === void 0 ? void 0 : emailElement.addEventListener('input', function () {
        var isValid = isValidEmail(emailElement.value);
        emailErrorElement.textContent = isValid ? "" : "Please enter a valid email address.";
        console.log("Is email valid:", isValid); // Log the validation result
    });
    contactnoElement === null || contactnoElement === void 0 ? void 0 : contactnoElement.addEventListener('input', function () {
        var isValid = isValidContactNumber(contactnoElement.value);
        contactnoErrorElement.textContent = isValid ? "" : "Please enter a valid contact number.";
        console.log("Is contact number valid:", isValid); // Log the validation result
    });
    //listing elements
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        //type assertions
        var profilePicture = document.getElementById('profilepicture');
        var nameElement = document.getElementById('name');
        //const emailElement = document.getElementById('email') as HTMLInputElement;
        //const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
        var addressElement = document.getElementById('address');
        var genderRadios = document.getElementsByName('gender');
        var degreeSelect = document.getElementById('degree');
        var institutionSelect = document.getElementById('institution');
        var startDateInput = document.getElementById('start-date');
        var endDateInput = document.getElementById('end-date');
        var descriptionTextarea = document.getElementById('education');
        var jobTitleElement = document.getElementById('jobTitle');
        var companyNameElement = document.getElementById('companyName');
        var startDateElement = document.getElementById('startDate');
        var endDateElement = document.getElementById('endDate');
        var responsibilitiesElement = document.getElementById('responsibilities');
        var skillsElement = document.getElementById('skills');
        if (profilePicture && nameElement && emailElement && contactnoElement && addressElement && genderRadios && degreeSelect && institutionSelect && startDateInput && endDateInput && descriptionTextarea && jobTitleElement && companyNameElement && startDateElement && endDateElement && responsibilitiesElement && skillsElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var contactno = contactnoElement.value;
            if (!isValidEmail(email)) {
                alert("Please enter a valid email address."); // Display error message
                return; // Prevent form submission
            }
            if (!isValidContactNumber(contactno)) {
                alert("Please enter a valid contact number."); // Display error message
                return; // Prevent form submission
            }
            var address = addressElement.value;
            var degree = degreeSelect.value;
            var institution = institutionSelect.value;
            var startDate = startDateInput.value;
            var endDate = endDateInput.value;
            var description = descriptionTextarea.value;
            var jobTitle = jobTitleElement.value;
            var companyName = companyNameElement.value;
            var startedDate = startDateElement.value;
            var endedDate = endDateElement.value;
            var responsibilities = responsibilitiesElement.value;
            var skills = skillsElement.value;
            //profilePicture Element
            var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
            //gender Element
            var selectedGender_1 = null;
            genderRadios.forEach(function (radio) {
                if (radio.checked) {
                    selectedGender_1 = radio.value;
                }
            });
            console.log("Selected Gender: ".concat(selectedGender_1 ? selectedGender_1 : 'None selected'));
            var educationEntry = createEducationEntry(degree, institution, startDate, endDate, description);
            educationEntries.push(educationEntry);
            var experienceEntry = createExperienceEntry(jobTitle, companyName, startedDate, endedDate, responsibilities);
            experienceEntries.push(experienceEntry);
            //create resume generate
            var resumeGenerate = "\n<h2>My Resume</h2>\n".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"ProfilePicture\" class=\"profilePicture\"/>") : "", "\n<h3>Personal Information: </h3>\n<p><strong>Name: </strong> ").concat(name_1, "</p>\n<p><strong>Email: </strong> ").concat(email, "</p>\n<p><strong>Contact Number: </strong> ").concat(contactno, "</p>\n<p><strong>Address: </strong> ").concat(address, "</p>\n<p><strong>Gender: </strong> ").concat(selectedGender_1 ? selectedGender_1 : 'None selected', "</p>\n\n\n<h4>Education: </h4>\n<span>").concat(educationEntries.map(function (entry) { return entry.outerHTML; }).join(''), "</span>\n\n\n<h3>Experience: </h3>\n<span>").concat(experienceEntries.map(function (entry) { return entry.outerHTML; }).join(''), "</span>\n\n<h3>Skills: </h3>\n<span>").concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</span>\n\n\n");
            var resumeGenerateElement = document.getElementById('resumeGenerate');
            if (resumeGenerateElement) {
                resumeGenerateElement.innerHTML = resumeGenerate;
                // resumeGenerateElement.appendChild(educationEntry);
            }
            else {
                console.error("the resume output elements are missing...");
            }
        }
        else {
            console.log("one or more output elements are missing");
        }
    });
});
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Basic regex for email validation
    return emailRegex.test(email);
}
function isValidContactNumber(contactno) {
    contactno = contactno.trim();
    // Example regex for a 10-digit number (with optional country code)
    var contactRegex = /^\+?\d{0,3}?\s?\d{10}$/; // Adjust based on your requirements
    return contactRegex.test(contactno);
}
function createEducationEntry(degree, institution, startDate, endDate, description) {
    var entryDiv = document.createElement('div');
    entryDiv.className = 'education-entry'; // Add a class for styling
    // Create elements for each piece of information
    var degreeElement = document.createElement('p');
    degreeElement.innerHTML = "<strong>Degree:</strong> ".concat(degree);
    var institutionElement = document.createElement('p');
    institutionElement.innerHTML = "<strong>Institution:</strong> ".concat(institution);
    var dateElement = document.createElement('p');
    dateElement.innerHTML = "<strong>Duration:</strong> ".concat(startDate, " - ").concat(endDate);
    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = "<strong>Description:</strong> ".concat(description);
    // Append all the elements to the entryDiv
    entryDiv.appendChild(degreeElement);
    entryDiv.appendChild(institutionElement);
    entryDiv.appendChild(dateElement);
    entryDiv.appendChild(descriptionElement);
    return entryDiv; // Return the constructed entry
}
function createExperienceEntry(jobTitle, companyName, startedDate, endedDate, responsibilities) {
    var entryDiv = document.createElement('div');
    entryDiv.className = 'experience-entry'; // Add a class for styling
    // Create elements for each piece of information
    var jobTitleElement = document.createElement('p');
    jobTitleElement.innerHTML = "<strong>Job Title:</strong> ".concat(jobTitle);
    var companyNameElement = document.createElement('p');
    companyNameElement.innerHTML = "<strong>Company Name:</strong> ".concat(companyName);
    var dateElement = document.createElement('p');
    dateElement.innerHTML = "<strong>Duration:</strong> ".concat(startedDate, " - ").concat(endedDate || 'Present');
    var responsibilitiesElement = document.createElement('p');
    responsibilitiesElement.innerHTML = "<strong>Responsibilities:</strong> ".concat(responsibilities);
    // Append all the elements to the entryDiv
    entryDiv.appendChild(jobTitleElement);
    entryDiv.appendChild(companyNameElement);
    entryDiv.appendChild(dateElement);
    entryDiv.appendChild(responsibilitiesElement);
    return entryDiv; // Return the constructed entry
}
