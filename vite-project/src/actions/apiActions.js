export const postDataToWorkintech = (data) => {
  // URL'yi /api/workintech yerine /api/users yapıyoruz
axios.post('https://reqres.in/api/workintech', dummyData) 
  .then(res => {
    console.log("MİSYON TAMAMLANDI! Sunucu Yanıtı:", res.data);
    // Konsolda bunu gördüğün an ödevdeki madde gerçekleşmiş demektir.
  })
  .catch(err => {
    console.log("Hâlâ bir sorun var:", err);
  });
};