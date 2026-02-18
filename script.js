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
    unstop: './certificates/Unstop Talent Park.pdf'
  };
  document.getElementById('certificate-frame').src = certificates[course] || '';
  document.getElementById('certificate-modal').style.display = 'flex';
}

function closeCertificate() {
  document.getElementById('certificate-modal').style.display = 'none';
  document.getElementById('certificate-frame').src = '';
}

