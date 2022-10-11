import React, {useState} from 'react'
import Affairs from './Affairs'


// types
export type AffairPriorityType = 'High' | 'Middle' | 'Low'
export type AffairType = Array<{ _id: number, name: string, priority:AffairPriorityType }>
export type FilterType = 'All' | AffairPriorityType
export type filterAffairsPropsType = (affairs: AffairType, filter: FilterType)=> void

// constants
const defaultAffairs: AffairType = [
    {_id: 1, name: 'React-High', priority: 'High'},
    {_id: 2, name: 'anime Low', priority: 'Low'},
    {_id: 3, name: 'games Low', priority: 'Low'},
    {_id: 4, name: 'work High', priority: 'High'},
    {_id: 5, name: 'html & css Middle', priority: 'Middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): any => { // need to fix any
    if (filter === 'All') return affairs
    else if (filter=== 'High') return affairs.filter(a=> a.priority === filter)
    else if (filter=== 'Middle') return affairs.filter(a=> a.priority === filter)
    else if (filter=== 'Low') return affairs.filter(a=> a.priority === filter)
}
export const deleteAffair = (affairs:AffairType, _id: number): AffairType => {
    let newAffairs = affairs.filter((a)=>a._id !== _id)

    return newAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('All')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            should work (должно работать)
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
