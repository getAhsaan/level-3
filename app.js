// send name btn event-listener
document.getElementById('send-name-btn').addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const name = nameField.value;
    nameField.value = '';
    if (name.length > 0) {
        sendNameToLS(name);
    } else {
        alert('No input')
    }

})

// send email btn event-listener
document.getElementById('send-email-btn').addEventListener('click', () => {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    emailField.value = '';
    if (email.length > 0) {
        sendEmailToLS(email);
    } else {
        alert('No input')
    }
})

// send msg btn event listener
document.getElementById('send-msg-btn').addEventListener('click', () => {
    const messageField = document.getElementById('textarea');
    const message = messageField.value;
    messageField.value = '';
    if (message.length > 0) {
        sendMessageToLS(message);
    } else {
        alert('No input')
    }
})

// get name from local storage
const getNameFromLS = () => {
    let name = '';
    const lsName = localStorage.getItem('name');
    if (lsName) {
        name = JSON.parse(lsName);
    }
    return name;
}
// get email from local storage
const getEmailFromLS = () => {
    let email = '';
    const lsEmail = localStorage.getItem('email');
    if (lsEmail) {
        email = JSON.parse(lsEmail);
    }
    return email;
}
//get message from local storage
const getMessageFromLS = () => {
    let message = '';
    const lsMessage = localStorage.getItem('message');
    if (lsMessage) {
        message = JSON.parse(lsMessage);
    }
    return message;
}

// set name to local storage
const sendNameToLS = (name) => {
    let sendName = getNameFromLS();
    sendName = JSON.stringify(name);
    localStorage.setItem('name', sendName);
}
// set email to local storage
const sendEmailToLS = (email) => {
    let sendEmail = getEmailFromLS();
    sendEmail = JSON.stringify(email);
    localStorage.setItem('email', sendEmail);
}
// set message to local storage
const sendMessageToLS = (message) => {
    let sendMessage = getMessageFromLS();
    sendMessage = JSON.stringify(message);
    localStorage.setItem('message', sendMessage);
}

//////////////////////////////////////////////////////

document.getElementById('delete-name-btn').addEventListener('click', () => {
    localStorage.removeItem('name');
})
document.getElementById('delete-email-btn').addEventListener('click', () => {
    localStorage.removeItem('email');
})
document.getElementById('delete-message-btn').addEventListener('click', () => {
    localStorage.removeItem('message');
})

document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('message')
    localStorage.removeItem('data')
})


document.getElementById('send-btn').addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('textarea');
    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    
    const getDataFromLS = () => {
        let data = {};
        const lsData = localStorage.getItem('data');
        if (lsData) {
            data = JSON.parse(lsData);
        }
        return data;
    }
    
    const sendDataToLS = (name, email, message) => {
        const data = getDataFromLS();
        data['name'] = name;
        data['email'] = email;
        data['message'] = message;
        const strData = JSON.stringify(data);
        localStorage.setItem('data', strData);
    }


    if (name.length > 0 && email.length > 0 && message.length > 0) {
        sendDataToLS(name, email, message);
    } else {
        alert('No input')
    }
})


