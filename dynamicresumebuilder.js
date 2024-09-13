var _a;
//listing elements
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertions
    var profilePicture = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactnoElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePicture && nameElement && emailElement && contactnoElement && addressElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contactno = contactnoElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //profilePicture Element
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume generate
        var resumeGenerate = "\n<h2>MyResume</h2>\n".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"ProfilePicture\" class=\"profilePicture\"/>") : "", "\n<p><strong>Name: </strong> ").concat(name_1, "</p>\n<p><strong>Email: </strong> ").concat(email, "</p>\n<p><strong>Contact Number: </strong> ").concat(contactno, "</p>\n<p><strong>Address: </strong> ").concat(address, "</p>\n\n\n<h3>Education: </h3>\n<p>").concat(education, "</p>\n\n<h3>Experiences: </h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills: </h3>\n<p>").concat(skills, "</p>\n\n\n");
        var resumeGenerateElement = document.getElementById("resumeGenerate");
        if (resumeGenerateElement) {
            resumeGenerateElement.innerHTML = resumeGenerate;
        }
        else {
            console.error("the resume output elements are missing...");
        }
    }
    else {
        console.log("one or more output elements are missing");
    }
});
