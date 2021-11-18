// /*
// Gửi dữ liệu từ form HTML --> microsoft form

// Kiến thức cần có

// */

document.querySelector('#submit-form').onsubmit = function (e) {
    e.preventDefault();
    alert("Submit")

    let fullname = document.querySelector('input[name="fullname"]').value
    let email = document.querySelector('input[name="email"]').value

    console.log(fullname, email)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "DcLcid=ui=1033&data=1033; FormsWebSessionId=a7868b83-7d77-4ed8-9dae-ae59b7d850d7; RpsAuthNonce=462b4f4e-011c-41d5-abdf-f82b3d7b7e0a; usenewauthrollout=True");

    var raw = JSON.stringify({
        "answers": `[{\"questionId\":\"r635b0267491c4a25b943ac1810aec415\",\"answer1\":\"${fullname}\"},{\"questionId\":\"r022cbedc1b76468c8378cfcff41d3eda\",\"answer1\":\"${email}\"}]`
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-400104e13990/forms('DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQThOZBUNDJEUDRESVQwMlQ1RlY5N0FSMzAzRU1RMC4u')/responses", requestOptions)
        .then(response => console.log(response.text()))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



}

    //     let data = {
    //         "answers": `[{\"questionId\":\"r635b0267491c4a25b943ac1810aec415\",\"answer1\":\"${fullname}\"},{\"questionId\":\"r022cbedc1b76468c8378cfcff41d3eda\",\"answer1\":\"${email}\"}]`
    //     }

    //     // console.log(JSON.stringify(data))

    //     fetch('https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-400104e13990/forms(\'DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQThOZBUNDJEUDRESVQwMlQ1RlY5N0FSMzAzRU1RMC4u\')/responses', {
    //         mode: 'navigate',
    //         // credentials: 'include',
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Accept-Encoding': 'gzip, deflate, br'
    //             // "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
    //             // 'Access-Control-Allow-Origin': '*',
    //             // 'Access-Control-Allow-Credentials': 'true'
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Success:', data);
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    //     // var data = JSON.stringify(data);
    //     // // let queryString = new URLSearchParams(data)
    //     // // queryString = queryString.toString()

    //     // console.log(queryString)

    //     // let xhr = new XMLHttpRequest();
    //     // xhr.open("POST", 'https://forms.office.com/formapi/api/40127cd4-45f3-49a3-b05d-315a43a9f033/users/b9035fc1-b265-49d1-b37b-f7e3fab5d107/forms(\'1HwSQPNFo0mwXTFaQ6nwM8FfA7llstFJs3v34_q10QdUMlkxVFhLUEZSUFFBTDdOWDNBSlE2OVo5My4u\')/responses', true);

    //     // //Send the proper header information along with the request
    //     // xhr.setRequestHeader({ 'Content-Type': 'application/json' });

    //     // xhr.send(data);


    //     // async function loadNames() {
    //     //     const response = await fetch('https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-400104e13990/forms("DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQThOZBUNDJEUDRESVQwMlQ1RlY5N0FSMzAzRU1RMC4u")/responses');
    //     //     const names = await response.json();
    //     //     console.log(names);
    //     //     // logs [{ name: 'Joker'}, { name: 'Batman' }]
    //     // }
    //     // loadNames();
    //     // var formData = JSON.stringify($("#submit-form").serializeArray());
    //     // console.log(formData)
    //     // $.ajax({
    //     //     type: "POST",
    //     //     url: "https://forms.office.com/r/kShEYythyB",
    //     //     data: formData,
    //     //     success: function () { },
    //     //     dataType: "json",
    //     //     contentType: "application/json"
    //     // });
    // }

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "DcLcid=ui=1033&data=1033; FormsWebSessionId=a7868b83-7d77-4ed8-9dae-ae59b7d850d7; RpsAuthNonce=462b4f4e-011c-41d5-abdf-f82b3d7b7e0a; usenewauthrollout=True");

    // var raw = JSON.stringify({
    //     "answers": `[{\"questionId\":\"r635b0267491c4a25b943ac1810aec415\",\"answer1\":\"${fullname}\"},{\"questionId\":\"r022cbedc1b76468c8378cfcff41d3eda\",\"answer1\":\"${email}\"}]`
    // });

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch("https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-400104e13990/forms('DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQThOZBUNDJEUDRESVQwMlQ1RlY5N0FSMzAzRU1RMC4u')/responses", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

// var data = JSON.stringify({
//     "answers": "[{\"questionId\":\"r635b0267491c4a25b943ac1810aec415\",\"answer1\":\"aaa1\"},{\"questionId\":\"r022cbedc1b76468c8378cfcff41d3eda\",\"answer1\":\"aaaa1\"}]"
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("POST", "https://forms.office.com/formapi/api/9188040d-6c67-4c5b-b112-36a304b66dad/users/00000000-0000-0000-0003-400104e13990/forms('DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQThOZBUNDJEUDRESVQwMlQ1RlY5N0FSMzAzRU1RMC4u')/responses");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Cookie", "DcLcid=ui=1033&data=1033; FormsWebSessionId=a7868b83-7d77-4ed8-9dae-ae59b7d850d7; RpsAuthNonce=462b4f4e-011c-41d5-abdf-f82b3d7b7e0a; usenewauthrollout=True");

// xhr.send(data);