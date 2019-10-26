function validation() {
    if (/^[A-Z]{3,}$/.test(`nama.value`)) {
        return true;
    }

    if (/^[0-9]{1,2}$/.test(`umur.value`)) {
        return true;
    }
    if (/^[a-z]{4}[_.]{1}[0-9]{3}$/.test(`username.value`)) {
        return true;
    }
};