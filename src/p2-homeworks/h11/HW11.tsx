import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value, setValue] = useState<[number, number]>([0, 100])

    const onChangeRange = (newValue: number) => {
        setValue([newValue, value[1]])
    }

    const onHandleChange = (newValue: number | number[]) => {
        setValue(newValue as [number, number]);
    };

    const spanStyle = {
        display: 'inline-block',
        width: '30px',
        marginLeft: '10px'
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span style={spanStyle}>{value[0]}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value[0]}
                />
            </div>

            <div>
                <span style={spanStyle}>{value[0]}</span>
                <SuperDoubleRange
                    value={value}
                    onHandleChange={onHandleChange}
                />
                <span style={spanStyle}>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
