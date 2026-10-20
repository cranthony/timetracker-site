// Assembles the contact address at load time, so it isn't in the HTML
// for address harvesters to read. Without script the link's text still
// says the address in words.
document.querySelectorAll('a.contact').forEach(function (a) {
  var address = a.dataset.user + '@' + a.dataset.host + '.' + a.dataset.tld;
  a.href = 'mailto:' + address;
  a.textContent = address;
});
