import app from "./app";
import DataBase from "./data-object";

const PORT = 3000;

(
    async () =>{
        try{
             await DataBase.connect();
             app.listen(PORT,()=>{
                console.log(`SERVER IS STARTED ON THE PORT ${PORT}`);
             })
        }
        catch(error){
            console.log(error)
        }
      }
)
()