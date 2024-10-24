//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event)  {
    event.preventDefault();
    
//type assertions
const profilePicture = document.getElementById('profilepicture') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const contactnoElement = document.getElementById('contactno') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;
const genderRadios = document.getElementsByName('gender') as NodeListOf<HTMLInputElement>;
const educationElement = document.getElementById('education') as HTMLTextAreaElement;
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


if( profilePicture && nameElement && emailElement && contactnoElement && addressElement && genderRadios && educationElement && skillsElement && experienceElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const contactno = contactnoElement.value;
    const address= addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
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
//create resume generate
const resumeGenerate = `
<h2>My Resume</h2>
${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="ProfilePicture" class="profilePicture"/>` : ""
}
<p><strong>Name: </strong> ${name}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Contact Number: </strong> ${contactno}</p>
<p><strong>Address: </strong> ${address}</p>
<p><strong>Gender: </strong> ${selectedGender ? selectedGender : 'None selected'}</p>


<h3>Education: </h3>
<span>${education}</span>

<h3>Experiences: </h3>
<span>${experience}</span>

<h3>Skills: </h3>
<span>${skills}</span>


`;


const resumeGenerateElement = document.getElementById('resumeGenerate');
if(resumeGenerateElement){
    resumeGenerateElement.innerHTML = resumeGenerate;
} else {
    console.error("the resume output elements are missing...");
} 
} else {
    console.log("one or more output elements are missing");
}


})






