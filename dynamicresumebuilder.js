var educationEntries = [];
var experienceEntries = [];
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var emailElement = document.getElementById('email');
    var contactnoElement = document.getElementById('contactno');
    var emailErrorElement = document.getElementById('emailError');
    var contactnoErrorElement = document.getElementById('contactnoError');
    var languageOptions = document.querySelectorAll('input[name="languages"]');
    var selectedLanguagesContainer = document.getElementById('selected-languages');
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
    function updateSelectedLanguages() {
        selectedLanguagesContainer.innerHTML = '';
        var languageList = document.createElement('ul');
        languageOptions.forEach(function (checkbox) {
            if (checkbox.checked) {
                var languageItem = document.createElement('li');
                languageItem.textContent = checkbox.value;
                languageList.appendChild(languageItem);
            }
        });
        selectedLanguagesContainer === null || selectedLanguagesContainer === void 0 ? void 0 : selectedLanguagesContainer.appendChild(languageList);
    }
    languageOptions.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateSelectedLanguages);
    });
    //listing elements
    (_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        //type assertions
        var profilePicture = document.getElementById('profilepicture');
        var roleElement = document.getElementById('designation');
        var nameElement = document.getElementById('name');
        var profileElement = document.getElementById('profile');
        var linkElement = document.getElementById('link');
        var addressElement = document.getElementById('address');
        var genderRadios = document.getElementsByName('gender');
        var skillsElement = document.getElementById('skills');
        var interestsElement = document.getElementById('interests');
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
        if (profilePicture && roleElement && nameElement && profileElement && emailElement && contactnoElement && languageOptions && selectedLanguagesContainer && linkElement && addressElement && genderRadios && skillsElement && interestsElement && degreeSelect && institutionSelect && startDateInput && endDateInput && descriptionTextarea && jobTitleElement && companyNameElement && startDateElement && endDateElement && responsibilitiesElement) {
            var role = roleElement.value;
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var profile = profileElement.value;
            var contactno = contactnoElement.value;
            if (!isValidEmail(email)) {
                alert("Please enter a valid email address."); // Display error message
                return; // Prevent form submission
            }
            if (!isValidContactNumber(contactno)) {
                alert("Please enter a valid contact number."); // Display error message
                return; // Prevent form submission
            }
            var linkedinUrl = (linkElement === null || linkElement === void 0 ? void 0 : linkElement.value) || '';
            var address = addressElement.value;
            var skills = skillsElement.value;
            var skillItems = skills.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill.length > 0; });
            var skillsList = "\n    <section id=\"skills\">\n        <ul>\n            ".concat(skillItems.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    </section>\n");
            var interests_1 = interestsElement.value;
            var interestsItems = interests_1.split(',').map(function (interest) { return interest.trim(); }).filter(function (interest) { return interest.length > 0; });
            var interestsList = "\n    <section id=\"interests\">\n        <ul>\n            ".concat(interestsItems.map(function (interest) { return "<li>".concat(interests_1, "</li>"); }).join(''), "\n        </ul>\n    </section>");
            var languagesList = "\n       <section id=\"languages\">\n        <ul>\n            ".concat(Array.prototype.slice.call(languageOptions) // Convert NodeList to Array
                .filter(function (option) { return option.checked; })
                .map(function (option) { return "<li>".concat(option.value, "</li>"); })
                .join(''), "\n        </ul>\n    </section>\n");
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
            function updateSelectedLanguages() {
                selectedLanguagesContainer.innerHTML = '';
                languageOptions.forEach(function (checkbox) {
                    if (checkbox.checked) {
                        // Create a new HTML element for each selected language
                        var languageElement = document.createElement('p');
                        languageElement.textContent = checkbox.value;
                        selectedLanguagesContainer === null || selectedLanguagesContainer === void 0 ? void 0 : selectedLanguagesContainer.appendChild(languageElement);
                    }
                });
            }
            // Add event listeners to each checkbox
            languageOptions.forEach(function (checkbox) {
                checkbox.addEventListener('change', updateSelectedLanguages);
            });
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
            var resumeGenerate = "\n<div class=\"container\">\n<div class=\"left-section\">\n<div class=\"profile-text\">\n<div class=\"img-box\">\n".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"ProfilePicture\" class=\"profilePicture\"/>") : "", "\n</div>\n <h2>").concat(name_1, "<br><span>").concat(role, "</span></h2>\n</div>\n<div class=\"contact-info\">   \n<h3 class=\"title\">Contact Info</h3>\n            <ul>\n                <li>\n                    <span class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\n                    <span class=\"text\">").concat(contactno, "</span>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <span class=\"icon\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></span>\n                    <span class=\"text\">").concat(email, "</span>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <span class=\"icon\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i></span>\n                    <span class=\"text\">").concat(selectedGender_1 ? selectedGender_1 : 'None selected', "</span>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <span class=\"icon\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></span>\n                    <span class=\"url\" class=\"Info\"> ").concat(linkedinUrl ? "<a href=\"".concat(linkedinUrl, "\" target=\"_blank\">").concat(linkedinUrl, "</a>") : 'Not provided', "</span>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <span class=\"icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n                    <span class=\"text\">").concat(address, "</span>\n                </li>\n            </ul>\n      </div>\n \n <div class=\"skills\">\n<h3 class=\"title\">Professional Skills</h3>\n<div class=\"box\">\n<span>").concat(skillsList, "</span>\n</div>\n</div>\n<div class=\"contact-info language\">\n<h3 class=\"title\">Languages</h3>         \n<span>").concat(languagesList, "</span>\n</div>\n</div>\n\n\n<div class=\"right-section\">\n<div class=\"about\">\n<h2 class=\"title2\">Profile</h2> \n<p>").concat(profile, "</p>             \n<div class=\"contact-info education\"> \n<h3 class=\"title2\">Education</h3>\n<span>").concat(educationEntries.map(function (entry) { return entry.outerHTML; }).join(''), "</span>\n</div>\n</div>\n <div class=\"about\">\n<div class=\"contact-info education\">\n<h3 class=\"title2\">Experience</h3>\n<span>").concat(experienceEntries.map(function (entry) { return entry.outerHTML; }).join(''), "</span>\n</div>\n</div>\n <div class=\"about interest\">\n<h3 class=\"title2\">Interests</h3>\n<span>").concat(interestsList, "</span>\n</div>\n</div>\n\n");
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
