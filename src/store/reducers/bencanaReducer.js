const initState = {
  bencana: [
    {id: '1', jenis: "gempa", lokasi: [12, 121], magnitude: 4, waktu: "20 Mei 2019 12.00.00"}
  ]
}

const bencanaReducer = (state = initState, action) => {
  return state;
}

export default bencanaReducer
