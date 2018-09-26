export class authFiebase{

    constructor(){
        throw new Error("esta é uma class com métodos estáticos, não deve ser instanciada.");
    }

    static login(error){
            if(error===undefined){
                console.log(error)
                return {title: 'Atenção' ,message: 'Preencha os dados da sua conta!', buttons: ['Entendi']};     
            }

            if(error.code==="auth/wrong-password"){
                console.log(error)
                return {message: 'senha incorreta!', duration: 3000,position:'top'};
            }
            if(error.code==="auth/user-not-found"){
                console.log(error)
                return {message: 'Esse usuário ainda não estar cadastrado', duration: 4000,position:'middle'};
            }

            if(error.code==="auth/network-request-failed"){
                console.log(error)
                return {
                    message: 'Erro ao tentar conectar sua conta, verifique sua conexão com internet',
                    showCloseButton: true,
                    closeButtonText: 'OK',
                    position:'middle'}
            }

            if(error.code==="auth/user-disabled"){
                console.log(error)
                return{
                    message: 'Estar conta estar desativada! para reativar uma conta você deve entrar em contato com os Desenvolvedores',
                    showCloseButton: true,
                    closeButtonText: 'Entendi',
                    position:'middle'};
            }
   }



     static cadastro(error){

        if(error===undefined){
            console.log(error)
            return {title: 'Ops!', message: 'Seus dados devem ser preenchidos corretamente!', position:'middle', buttons: ['Entendi']};
        }
        if(error.code==="auth/email-already-in-use"){
            console.log(error)
            return {title: 'Atenção!' ,message: 'Esse e-mail já estar em uso.', duration: 4000,position:'middle',buttons: ['Entendi']};
        }

        if(error.code==="auth/weak-password"){
            console.log(error)
            return {title: 'Aviso!',message: 'Sua senha deve conter 6 caracteres ou mais.', duration: 4000,position:'middle',buttons: ['OK']};
        }

        if(error.code==="auth/invalid-email"){
            console.log(error)
            return {title: 'Atenção!', message: 'Esse e-mail não estar em um formato valído!', duration: 4000,position:'middle',buttons: ['OK']};
        }

        if(error.code==="auth/email-already-in-use"){
            console.log(error)
            return {title: 'Aviso!', message: 'Esse e-mail já estar em uso!', duration: 4000,position:'middle', buttons: ['OK']};
        }

      
        }


}