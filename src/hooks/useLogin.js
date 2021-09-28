import { useState } from "react"


export const useLogin=()=>{
    const [body, setBody] = useState({ nickname: '', password: '' })

    const handleChange = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = () => {
        console.log(body)
    }
    return{
        body,
        handleChange,
        onSubmit,
    }

}
