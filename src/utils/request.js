/**
 * 封装fetch方法，向服务器发送GET请求
 * @param {string} url
 */
function get(url) {
    return fetch(url, {
        method: 'GET',
        //headers: headers,
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} .Message = ${err}`);
        return {erro: {message: "Request failed."}};
    })
}

/**
 * 封装fetch方法，向服务器发送POST请求
 * @param {string} url 
 * @param {*} data 
 */
function post(url, data) {
    return fetch(url, {
        method: 'POST',
        //headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} .Message = ${err}`);
        return {erro: {message: "Request failed."}};
    })
}

/**
 * 封装fetch方法，向服务器发送PUT请求
 * @param {string} url 
 * @param {*} data 
 */
function put(url, data) {
    return fetch(url, {
        method: 'PUT',
        //headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} .Message = ${err}`);
        return {erro: {message: "Request failed."}};
    })
}

/**
 * 处理服务器返回的Response对象，如果请求返回状态码小于500，则将请求解析成json
 * @param {string} url 
 * @param {Response} response 
 */
function handleResponse(url, response) {
    if(response.status < 500) {
        return response.json();
    } else {
        console.error(`Request failed. Url = ${url} .Message = ${response.statusText}`);
        return {error: {message: "Request failed due to server error"}};
    }
}

export {get, post, put}