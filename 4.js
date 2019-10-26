let arrays = [
    {
      name: "Movies", info: "category_name",
      data: [
        { name: "Interstellar", info: "category_data" },
        { name: "Dark Knight", info: "category_data" },
      ]
    },
    {
      name: "Music", info: "category_name",
      data: [
        { name: "Adams", info: "category_data" },
        { name: "Nirvana", info: "category_data" },
      ]
    }
  ];


function out(arr) {
    let result = [];
    for(let i = 0;i < arr.length;i++) {
        result.push({name: arr[i].name, info: arr[i].info})
        for(let j = 0;j < arr[i].data.length;j++) {
            result.push(arr[i].data[j]);
        }
    }
    return result;
}

out(arrays)