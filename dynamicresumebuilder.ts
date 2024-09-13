//listing elements
document.getElementById("resumeForm")?.addEventListener("submit", function(event)  {
    event.preventDefault();
    
//type assertions
const profilePicture = document.getElementById('profilepicture') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const contactnoElement = document.getElementById('contact') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLTextAreaElement;
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


if( profilePicture && nameElement && emailElement && contactnoElement && addressElement && educationElement && skillsElement && experienceElement){
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

//create resume generate
const resumeGenerate = `
<h2>MyResume</h2>
${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="ProfilePicture" class="profilePicture"/>` : ""
}
<p><strong>Name: </strong> ${name}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Contact Number: </strong> ${contactno}</p>
<p><strong>Address: </strong> ${address}</p>


<h3>Education: </h3>
<p>${education}</p>

<h3>Experiences: </h3>
<p>${experience}</p>

<h3>Skills: </h3>
<p>${skills}</p>


`;


const resumeGenerateElement = document.getElementById("resumeGenerate");
if(resumeGenerateElement){
    resumeGenerateElement.innerHTML = resumeGenerate;
} else {
    console.error("the resume output elements are missing...");
} 
} else {
    console.log("one or more output elements are missing");
}


})






