const educationEntries: HTMLElement[] = [];
const experienceEntries: HTMLElement[] = [];

document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
    const emailErrorElement = document.getElementById('emailError') as HTMLSpanElement;
    const contactnoErrorElement = document.getElementById('contactnoError') as HTMLSpanElement;
    const languageOptions = document.querySelectorAll<HTMLInputElement>('input[name="languages"]');
    const selectedLanguagesContainer = document.getElementById('selected-languages');
    
    // Add event listeners for real-time validation
      emailElement?.addEventListener('input', () => {
        const isValid = isValidEmail(emailElement.value);
        emailErrorElement.textContent = isValid ? "" : "Please enter a valid email address.";
        console.log("Is email valid:", isValid); // Log the validation result
    });

    contactnoElement?.addEventListener('input', () => {
        const isValid = isValidContactNumber(contactnoElement.value);
        contactnoErrorElement.textContent = isValid ? "" : "Please enter a valid contact number.";
        console.log("Is contact number valid:", isValid); // Log the validation result
    }); 



    function updateSelectedLanguages() {
        selectedLanguagesContainer!.innerHTML = '';
        const languageList = document.createElement('ul');
        languageOptions.forEach((checkbox) => {
            if (checkbox.checked) {
                const languageItem = document.createElement('li');
                languageItem.textContent = checkbox.value;
                languageList.appendChild(languageItem);
            }
        });
        selectedLanguagesContainer?.appendChild(languageList

        );
    }

    languageOptions.forEach((checkbox) => {
        checkbox.addEventListener('change', updateSelectedLanguages);
    });


//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event)  {
    event.preventDefault();
    
//type assertions
const profilePicture = document.getElementById('profilepicture') as HTMLInputElement;
const roleElement = document.getElementById('designation') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const profileElement = document.getElementById('profile') as HTMLTextAreaElement;
const linkElement = document.getElementById('link') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;
const genderRadios = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
const interestsElement = document.getElementById('interests') as HTMLTextAreaElement;

const degreeSelect = document.getElementById('degree') as HTMLSelectElement;
const institutionSelect = document.getElementById('institution') as HTMLSelectElement;
const startDateInput = document.getElementById('start-date') as HTMLInputElement;
const endDateInput = document.getElementById('end-date') as HTMLInputElement;
const descriptionTextarea = document.getElementById('education') as HTMLTextAreaElement;

const jobTitleElement = document.getElementById('jobTitle') as HTMLInputElement;
const companyNameElement = document.getElementById('companyName') as HTMLInputElement;
const startDateElement = document.getElementById('startDate') as HTMLInputElement;
const endDateElement = document.getElementById('endDate') as HTMLInputElement;
const responsibilitiesElement = document.getElementById('responsibilities') as HTMLTextAreaElement;




if( profilePicture && roleElement && nameElement && profileElement && emailElement && contactnoElement && languageOptions && selectedLanguagesContainer && linkElement  && addressElement && genderRadios && skillsElement && interestsElement && degreeSelect && institutionSelect && startDateInput && endDateInput && descriptionTextarea && jobTitleElement && companyNameElement && startDateElement && endDateElement && responsibilitiesElement ){
    const role = roleElement.value;
    const name = nameElement.value;
    const email = emailElement.value;
    const profile= profileElement.value;
    const contactno = contactnoElement.value;
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address."); // Display error message
        return; // Prevent form submission
    }
    if (!isValidContactNumber(contactno)) {
        alert("Please enter a valid contact number."); // Display error message
        return; // Prevent form submission
    }
    const linkedinUrl = linkElement?.value || '';
    const address= addressElement.value;
    const skills = skillsElement.value;

    const skillItems = skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
const skillsList = `
    <section id="skills">
        <ul>
            ${skillItems.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    </section>
`;  
const interests = interestsElement.value;
const interestsItems = interests.split(',').map(interest => interest.trim()).filter(interest => interest.length > 0);
const interestsList = `
    <section id="interests">
        <ul>
            ${interestsItems.map(interest => `<li>${interests}</li>`).join('')}
        </ul>
    </section>`
const languagesList = `
       <section id="languages">
        <ul>
            ${Array.prototype.slice.call(languageOptions)  // Convert NodeList to Array
                .filter((option) => option.checked)
                .map((option) => `<li>${option.value}</li>`)
                .join('')}
        </ul>
    </section>
`;

    const degree = degreeSelect.value;
    const institution = institutionSelect.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const description = descriptionTextarea.value;
    const jobTitle = jobTitleElement.value;
    const companyName = companyNameElement.value;
    const startedDate = startDateElement.value;
    const endedDate = endDateElement.value;
    const responsibilities = responsibilitiesElement.value;
   
    function updateSelectedLanguages() {
        selectedLanguagesContainer!.innerHTML = '';

        languageOptions.forEach((checkbox) => {
            if (checkbox.checked) {
                // Create a new HTML element for each selected language
                const languageElement = document.createElement('p');
                languageElement.textContent = checkbox.value;
                selectedLanguagesContainer?.appendChild(languageElement);
            }
        });
    }
    
    // Add event listeners to each checkbox
    languageOptions.forEach((checkbox) => {
        checkbox.addEventListener('change', updateSelectedLanguages);
    });

//profilePicture Element
const profilePictureFile = profilePicture.files?.[0];
const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile): "";

//gender Element
let selectedGender: string | null = null;
genderRadios.forEach((radio) => {
    if (radio.checked) {
        selectedGender = radio.value;
    }
});
console.log(`Selected Gender: ${selectedGender ? selectedGender : 'None selected'}`);

const educationEntry = createEducationEntry(degree, institution, startDate, endDate, description);
educationEntries.push(educationEntry);

const experienceEntry = createExperienceEntry(jobTitle, companyName, startedDate, endedDate, responsibilities);
experienceEntries.push(experienceEntry);


//create resume generate
const resumeGenerate = `
<div class="container">
<div class="left-section">
<div class="profile-text">
<div class="img-box">
${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="ProfilePicture" class="profilePicture"/>` : ""
}
</div>
 <h2>${name}<br><span>${role}</span></h2>
</div>
<div class="contact-info">   
<h3 class="title">Contact Info</h3>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text">${contactno}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="text">${email}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-male" aria-hidden="true"></i></span>
                    <span class="text">${selectedGender ? selectedGender : 'None selected'}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                    <span class="url" class="Info"> ${linkedinUrl ? `<a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a>` : 'Not provided'}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text">${address}</span>
                </li>
            </ul>
      </div>
 
 <div class="skills">
<h3 class="title">Professional Skills</h3>
<div class="box">
<span>${skillsList}</span>
</div>
</div>
<div class="contact-info language">
<h3 class="title">Languages</h3>         
<span>${languagesList}</span>
</div>
</div>


<div class="right-section">
<div class="about">
<h2 class="title2">Profile</h2> 
<p>${profile}</p>             
<div class="contact-info education"> 
<h3 class="title2">Education</h3>
<span>${educationEntries.map(entry => entry.outerHTML).join('')}</span>
</div>
</div>
 <div class="about">
<div class="contact-info education">
<h3 class="title2">Experience</h3>
<span>${experienceEntries.map(entry => entry.outerHTML).join('') }</span>
</div>
</div>
 <div class="about interest">
<h3 class="title2">Interests</h3>
<span>${interestsList}</span>
</div>
</div>

`;


const resumeGenerateElement = document.getElementById('resumeGenerate');
if(resumeGenerateElement){
    resumeGenerateElement.innerHTML = resumeGenerate;
   // resumeGenerateElement.appendChild(educationEntry);

   
} else {
    console.error("the resume output elements are missing...");
} 
} else {
    console.log("one or more output elements are missing");
}


});
});

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Basic regex for email validation
    return emailRegex.test(email);
}
function isValidContactNumber(contactno: string): boolean {
       contactno = contactno.trim();
    // Example regex for a 10-digit number (with optional country code)
    const contactRegex = /^\+?\d{0,3}?\s?\d{10}$/; // Adjust based on your requirements
    return contactRegex.test(contactno);
}



function createEducationEntry(degree: string, institution: string, startDate: string, endDate: string, description: string): HTMLElement {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'education-entry'; // Add a class for styling

    // Create elements for each piece of information
    const degreeElement = document.createElement('p');
    degreeElement.innerHTML = `<strong>Degree:</strong> ${degree}`;
    
    const institutionElement = document.createElement('p');
    institutionElement.innerHTML = `<strong>Institution:</strong> ${institution}`;

    const dateElement = document.createElement('p');
    dateElement.innerHTML = `<strong>Duration:</strong> ${startDate} - ${endDate}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

    // Append all the elements to the entryDiv
    entryDiv.appendChild(degreeElement);
    entryDiv.appendChild(institutionElement);
    entryDiv.appendChild(dateElement);
    entryDiv.appendChild(descriptionElement);

    return entryDiv; // Return the constructed entry
}


function createExperienceEntry(jobTitle: string, companyName: string, startedDate: string, endedDate: string, responsibilities: string): HTMLElement {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'experience-entry'; // Add a class for styling

    // Create elements for each piece of information
    const jobTitleElement = document.createElement('p');
    jobTitleElement.innerHTML = `<strong>Job Title:</strong> ${jobTitle}`;
    
    const companyNameElement = document.createElement('p');
    companyNameElement.innerHTML = `<strong>Company Name:</strong> ${companyName}`;

    const dateElement = document.createElement('p');
    dateElement.innerHTML = `<strong>Duration:</strong> ${startedDate} - ${endedDate || 'Present'}`;

    const responsibilitiesElement = document.createElement('p');
    responsibilitiesElement.innerHTML = `<strong>Responsibilities:</strong> ${responsibilities}`;

    // Append all the elements to the entryDiv
    entryDiv.appendChild(jobTitleElement);
    entryDiv.appendChild(companyNameElement);
    entryDiv.appendChild(dateElement);
    entryDiv.appendChild(responsibilitiesElement);

    return entryDiv; // Return the constructed entry
}



