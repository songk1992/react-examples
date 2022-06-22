import { FunctionComponent } from "react";

interface Props {
    checkedFoods ?: string[];
    onCheck: (checked : string[]) => void;
    foods ?: string[];
}
 
const CheckBoxList : FunctionComponent<Props> = ({
    checkedFoods =[],
    onCheck,
    foods =[]
}) => {

    return (<ol>{foods.map((food, idx)=>
        <li key={food + '-' + idx}>
            <input type='checkbox' checked={checkedFoods?.includes(food)}onChange={(e)=>{
                if(e.target.checked){
                    onCheck([...checkedFoods!, food])
                } else{
                    onCheck(checkedFoods.filter((_food)=> _food !== food));
                }
            }}/>
            <span>{food}</span>
        </li>
    )}
    </ol>  );
}
 
export default CheckBoxList;