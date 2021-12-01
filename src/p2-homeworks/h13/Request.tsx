import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";
import {AxiosError} from "axios";

function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const body: BodyType = {
        success: checked
    }
    const onButtonHandler = () => {
        requestAPI.postRequest(body)
            .then(res => {
                setMessage(res.data.errorText)
            })
            .catch((error: AxiosError) => {
                setMessage(error.response?.data.errorText)
            })
    }

    return (
        <div>
            <SuperButton onClick={onButtonHandler}>
                Button
            </SuperButton >
            <SuperCheckbox onChange={onChangeHandler} checked={checked}/>
            {message}
        </div>
    );
}
export type BodyType = {
    success: boolean
}

export default Request;