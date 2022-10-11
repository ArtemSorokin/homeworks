import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (id: number)=>void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('All')
    } // need to fix
    const setHigh = () => {
        props.setFilter('High')
    }
    const setMiddle = () => {
        props.setFilter('Middle')
    }
    const setLow = () => {
        props.setFilter('Low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
