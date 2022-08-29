import axios from "axios"
import { UrlBase } from "../../contants/constants"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import * as Rot from "../../Routers/Coordinator"
import * as S from "../../style"


export function LoginPage() {

    const [form, onChange] = useForm({ email: "", password: "" })


    const navigate = useNavigate()
    const fazerLogin = (event) => {
        event.preventDefault() 
        axios.post(`${UrlBase}darvas/login`,form)
            .then((response) => {

                console.log(response.data);

                localStorage.setItem("token", response.data.token)
                Rot.goToUserPage(navigate);
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <S.TPage>
            <h1> labeX</h1>
            <S.MyForm onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" 
                    id="email" 
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" 
                    required 
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" 
                    id="senha" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" 
                    pattern="^.{3,}$"
                    title="mínimo de 3 caracteres"
                    required 
                />

                <S.MyButton type="submit" >Logar </S.MyButton>
            </S.MyForm>
        </S.TPage>

    )
}