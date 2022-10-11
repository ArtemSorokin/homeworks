import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {v1} from "uuid";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string, id: string)=> void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement> ) => { // need to fix any
        let newUserName = e.currentTarget.value
        setError(false)
        setName(newUserName)

    }

    const addUser = () => {
        debugger
        if(name === ''){
            setError(true)
        }

        else {let newUserinArray = {name: name, id: v1()}
            addUserCallback(newUserinArray.name, newUserinArray.id)
            alert(`Hello  ! ${name}`)

            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
