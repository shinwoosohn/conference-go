// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get('jwt_access_payload');
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
    const encodedPayload = JSON.parse(payloadCookie.value);

  // Convert the encoded payload from base64 to normal string
    const decodedPayload = atob(encodedPayload);

  // The payload is a JSON-formatted string, so parse it
    const payload = JSON.parse(decodedPayload);

  // Print the payload
    console.log(payload);

  // Check if "events.add_conference" is in the permissions.
  // If it is, remove 'd-none' from the link
    const perm = payload.user.perms;
    if (perm.includes("events.add_conference")) {
        const links = document.querySelector('#confPerm');
        links.classList.remove('d-none');
    }

  // Check if "events.add_location" is in the permissions.
  // If it is, remove 'd-none' from the link
    if (perm.includes("events.add_location")) {
        const links = document.querySelector('#locPerm');
        links.classList.remove('d-none');
    }

    if (perm.includes("events.add_location")) {
        const links = document.querySelector('#presPerm');
        links.classList.remove('d-none');
    }


}
