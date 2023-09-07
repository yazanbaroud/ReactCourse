function test1() {
    try {
        const num = getRandomNumber1();
        console.log(num);
    }
    catch (err) {
        alert(err.message);
    }
}

// Synchronous:
function getRandomNumber1() {
    const num = Math.floor(Math.random() * 100);
    Math.PI.toFixed(-5); // Demo for crash
    return num;
}

// ------------------------------------

function test2() {
    getRandomNumberAfterDelay2(num => console.log(num), err => alert(err.message));
}

function getRandomNumberAfterDelay2(successCallback, errorCallback) {
    setTimeout(() => {
        try {
            const num = Math.floor(Math.random() * 100);
            Math.PI.toFixed(-5); // Demo for crash
            successCallback(num);
        }
        catch (err) {
            errorCallback(err)
        }
    }, 3000);
}

// ------------------------------------

function test3() {
    getRandomNumberAfterDelay3()
        .then(num => console.log(num))
        .catch(err => alert(err.message));
}

function getRandomNumberAfterDelay3() {
    return new Promise((successCallback, errorCallback) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * 100);
                // Math.PI.toFixed(-5); // Demo for crash
                successCallback(num);
            }
            catch (err) {
                errorCallback(err)
            }
        }, 3000);
    });
}

// ------------------------------------

function test4() {
    getRandomNumberAfterDelay4(100)
        .then(num1 => {
            console.log(num1);

            getRandomNumberAfterDelay4(num1)
                .then(num2 => {
                    console.log(num2);

                    getRandomNumberAfterDelay4(num2)
                        .then(num3 => {
                            console.log(num3);
                        })
                        .catch(err => alert(err.message));

                })
                .catch(err => alert(err.message))

        })
        .catch(err => alert(err.message));
}

function getRandomNumberAfterDelay4(limit) {
    return new Promise((successCallback, errorCallback) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * limit);
                // Math.PI.toFixed(-5); // Demo for crash
                successCallback(num);
            }
            catch (err) {
                errorCallback(err)
            }
        }, 3000);
    });
}

// ------------------------------------

async function test5() {
    try {
        const num1 = await getRandomNumberAfterDelay5(100);
        console.log(num1);
        const num2 = await getRandomNumberAfterDelay5(num1);
        console.log(num2);
        const num3 = await getRandomNumberAfterDelay5(num2);
        console.log(num3);
    }
    catch (err) {
        alert(err.message);
    }
}

function getRandomNumberAfterDelay5(limit) {
    return new Promise((successCallback, errorCallback) => {
        setTimeout(() => {
            try {
                const num = Math.floor(Math.random() * limit);
                // Math.PI.toFixed(-5); // Demo for crash
                successCallback(num);
            }
            catch (err) {
                errorCallback(err)
            }
        }, 3000);
    });
}