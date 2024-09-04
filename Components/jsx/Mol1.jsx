import Home from "./Home1.jsx"
import { useState } from "react"
function Mol1() {
    let [count, set] = useState(0)
    let [mol,setmol]=useState()
    let ntpt = Number(mol)*6.022
    if (count == 1) {
        return (
            <>
                <Home />
            </>
        )
    }
    return (
        <>
            <div className="b2">
                <button className="btn" onClick={() => { set(count + 1) }}>
                    Home
                </button>
            </div>
            <div className="b1a">
                <h3 className="ti">Tính số nguyên tử (phân tử) có trong mỗi lượng chất</h3>
                <input type="text" className="ip" placeholder="Nhập số mol của nguyên tử" value={mol} onChange={(e) => {setmol(e.target.value)}}/>
                <h3 className="out">
                    {ntpt}x10<sup>23</sup>
                </h3>
            </div>
        </>
    )
}
export default Mol1