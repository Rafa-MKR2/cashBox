export class DateHerper{

    static hora(data:Date = new Date()){
 

        let hor = data.getHours() <10? '0'+data.getHours() : data.getHours();
        let min = data.getMinutes() <10? '0'+data.getMinutes() : data.getMinutes();
        let seg = data.getSeconds() <10? '0'+data.getSeconds() : data.getSeconds();
        
        let horaFormatada =  data.getHours()>11? 'PM':'AM';
         
         return `${hor}:${min}:${seg} ${horaFormatada}`;
    
      }



    static data(data:Date = new Date()){

        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}