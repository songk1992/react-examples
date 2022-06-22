import { NextPage } from "next"
import { useState } from "react"
import CheckboxList from "../../../components/learn22/CheckboxList"

const myFoodList = [
    '김치',
    '고구마',
    '감자',
    '피자',
    '햄버거',
    '라면',
    '제육볶음',
    '삼계탕',
    '닭곰탕',
    '추어탕'
]

const MyCheckList: NextPage = () => {

    const [checkedFoods, setCheckedFoods] = useState<string[]>([])

    const onMyFoodChecked = (checked : string[]) => {
        setCheckedFoods(checked)
        console.log(checked)
    }

    return(
        <CheckboxList
            checkedFoods ={checkedFoods}
            onCheck = {onMyFoodChecked}
            foods = {myFoodList}
        />
    )
}

export default MyCheckList;