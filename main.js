// Consultation form handler
const form = document.getElementById('consultForm');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const situation = document.getElementById('situation').value.trim();

    if (!name || !email || !situation) return;

    const subject = encodeURIComponent('Free Consultation Request from ' + name);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n\n' +
      'What they are working through:\n' + situation
    );

    // Open email client with pre-filled message
    window.location.href = 'mailto:angela@levelupcoach.me?subject=' + subject + '&body=' + body;

    // Show success message
    form.style.display = 'none';
    success.style.display = 'block';
  });
}
