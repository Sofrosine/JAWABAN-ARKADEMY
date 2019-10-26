function tezt(nama,angka) {
    let obj = {
        name : String(nama),
        umur : Number(angka),
        address : `Jl. Magelang KM 8,Mlati Glondong,Mlati,Sleman,Yogyakarta`,
        hobbies : [`Hiking`, `Football`, `Coding`],
        is_married : false,
        list_school : {
            name : `SMA N 1 Depok`,
            year_in : 2016,
            year_out : 2019,
            major : null
        },
        skills : {
            skill_name : `JavaScript`,
            level : `Beginner`
        },
        interest_in_coding : true,
    }
    return JSON.stringify(obj);
};

tezt(`Soultan`,18)

