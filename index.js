function sendMail(){
	let data = {
		subject:document.getElementById("subject").value,
		body: document.getElementById("message").value,
		name: document.getElementById("name").value,
		address: document.getElementById("address").value,
		phone: document.getElementById("phone").value
	};
	let dataEncoded = {
		subject:encodeURIComponent(data.subject),
		body:encodeURIComponent(data.body),
		name:encodeURIComponent(data.name),
		address:encodeURIComponent(data.address),
		phone:encodeURIComponent(data.phone),
	};
	const mail = document.createElement("a");
	mail.href =
		"mailto:Van%20den%20Bosch%20dakwerken<dolf@avandenbosch.be>?" +
		"subject=" + dataEncoded.subject +
		"&body=" + dataEncoded.body +
		"%0d%0a%0d%0a%0d%0a%0d%0aNaam:%20" + dataEncoded.name +
		"%0d%0aAdres:%20" + dataEncoded.address +
		"%0d%0aTelefoon-/gsm-nummer:%20" + dataEncoded.phone;
	mail.click();
}

const lazyLoad = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(
			(entry) => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.l;
					observer.unobserve(entry.target);
				}
			}
		);
	}
);
const images = document.querySelectorAll('img');
images.forEach(
	(image) => {
		image.dataset.l = image.src;
		image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89xQAAscB1RY/sEQAAAAASUVORK5CYII=';
		lazyLoad.observe(image);
	});
