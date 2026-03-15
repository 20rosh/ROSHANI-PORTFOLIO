function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}

function showCertificate(course) {
  const certificates = {
    dsa: './certificates/DSA Course DEVTOWN.pdf',
    accenture: './certificates/Accenture_completion_certificate.pdf',
    cpp: './certificates/Core Concepts of C++ Course DEVTOWN.pdf',
    ds: './certificates/dATA SCIENCE DevTown.pdf',
    unstop: './certificates/Unstop Talent Park.pdf',
    teachmaven: './certificates/TeachMaven Certificate.pdf',
    aws: './certificates/Roshani Singh - AWS Internship - Training.pdf'
  };

  document.getElementById('certificate-frame').src = certificates[course] || '';
  document.getElementById('certificate-modal').style.display = 'flex';
}

function closeCertificate() {
  document.getElementById('certificate-modal').style.display = 'none';
  document.getElementById('certificate-frame').src = '';
}

function toggleMoreCourses() {
  const moreCourses = document.getElementById('more-courses');
  const button = document.querySelector('#see-more-btn');
  if (moreCourses.style.display === 'none' || moreCourses.style.display === '') {
    moreCourses.style.display = 'flex';
    moreCourses.style.flexDirection = 'column';
    button.textContent = 'See Less';
  } else {
    moreCourses.style.display = 'none';
    button.textContent = 'See More';
  }
}

