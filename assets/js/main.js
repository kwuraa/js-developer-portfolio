function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.textContent = profileData.name;

  const job = document.getElementById("profile.job");
  job.textContent = profileData.job;

  const location = document.getElementById("profile.location");
  location.textContent = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.textContent = profileData.phone;
  phone.href = `tell:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.textContent = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => `<li>
    <img
      src="${skill.logo}"
      alt="${skill.name}"
      title="${skill.name}"
    />
  </li>`
    )
    .join("");
}

function updateLang(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `<li>
              <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
              <a href="${project.url}" target="_blank"
                >${project.url}</a
              >
            </li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLang(profileData);
  updatePortfolio(profileData);
})();
