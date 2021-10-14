import jwt from 'jsonwebtoken';

export const generateToken = (uid: number) =>{

    return new Promise((resolve,reject)=>{

        const payload={uid};
        const secret =process.env.JWT_KEY

        if (secret) {
            jwt.sign(payload, secret, {
                expiresIn:'24h'
            },(err, token)=>{
                if(err){
                    console.log(err)
                    reject('No se pudo generar el JWT')
                } else{
                    resolve(token)
                }
            })
        } else {
            throw new Error('No existe una firma para el token')
        }

    })
}
