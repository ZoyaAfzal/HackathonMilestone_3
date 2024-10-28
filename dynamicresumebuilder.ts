const educationEntries: HTMLElement[] = [];
const experienceEntries: HTMLElement[] = [];

document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
    const emailErrorElement = document.getElementById('emailError') as HTMLSpanElement;
    const contactnoErrorElement = document.getElementById('contactnoError') as HTMLSpanElement;

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


//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event)  {
    event.preventDefault();
    
//type assertions
const profilePicture = document.getElementById('profilepicture') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
//const emailElement = document.getElementById('email') as HTMLInputElement;
//const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;
const genderRadios = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
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

const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


if( profilePicture && nameElement && emailElement && contactnoElement && addressElement && genderRadios && degreeSelect && institutionSelect && startDateInput && endDateInput && descriptionTextarea && jobTitleElement && companyNameElement && startDateElement && endDateElement && responsibilitiesElement && skillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const contactno = contactnoElement.value;
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address."); // Display error message
        return; // Prevent form submission
    }
    if (!isValidContactNumber(contactno)) {
        alert("Please enter a valid contact number."); // Display error message
        return; // Prevent form submission
    }
    const address= addressElement.value;
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
    const skills = skillsElement.value;

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
<h2>My Resume</h2>
${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="ProfilePicture" class="profilePicture"/>` : ""
}
<h3>Personal Information: </h3>
<p><strong>Name: </strong> ${name}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Contact Number: </strong> ${contactno}</p>
<p><strong>Address: </strong> ${address}</p>
<p><strong>Gender: </strong> ${selectedGender ? selectedGender : 'None selected'}</p>


<h4>Education: </h4>
<span>${educationEntries.map(entry => entry.outerHTML).join('')}</span>


<h3>Experience: </h3>
<span>${experienceEntries.map(entry => entry.outerHTML).join('') }</span>

<h3>Skills: </h3>
<span>${skills.split(',').map(skill => skill.trim()).join(', ') }</span>


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



