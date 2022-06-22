import { NextPage } from "next"
import { useState } from "react"

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

    const [foods, setFoods] = useState<string[]>([])

    const onMyFoodChecked = (selected : string[]) => {
        setFoods(selected)
        console.log(selected)
    }

    return(
    <ol>{myFoodList.map((food, idx)=>
        <li key={food + '-' + idx}>
            <input type='checkbox' checked={foods?.includes(food)}onChange={(e)=>{
                if(e.target.checked){
                    onMyFoodChecked([...foods!, food])
                } else{
                    onMyFoodChecked(foods.filter((_food)=> _food !== food));
                }
            }}/>
            <span>{food}</span>
        </li>
    )}
    </ol>
    )
}

export default MyCheckList;