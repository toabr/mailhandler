export function fakeMails() {
  // console.log(fakeMails);
  return {data: proto};
}

export function getMails(callback) {
  fetch('/mails')
  .then(response => {
    return response.json();
  })
  .then(data => {
    callback(data);
    console.log('fetching ...');
  })
  .catch(err => {
    console.log('>> api:', err);
  });
}

export function sendMail(data) {
  fetch('/mails',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => { console.log('sending ...') })
  .catch(res => { console.log('catch', res) })
}

const proto = [
  { title: 'Frau', name: 'Musterfrau', mail: 'muster@invalid.com', enquiry: 1, comment: 'blabla' },
  { title: 'Herr', name: 'Domino', mail: 'muster@invalid.com', enquiry: 1, comment: 'blabla' },
  { title: 'Frau', name: 'Musterfrau', mail: 'muster@invalid.com', enquiry: 1, comment: 'blabla' }
];
