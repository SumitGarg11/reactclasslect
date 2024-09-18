import { salary } from "../utils/constant";
const UpdatedSal = (salary) => {
    return (
        salary.map((it)=> it*5)
    )
}
export default UpdatedSal;