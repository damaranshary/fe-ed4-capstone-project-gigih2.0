import Animal from "../../imgstock/AN.png";
import Vehicle from "../../imgstock/Vehicle.png";
import Food from "../../imgstock/Food.png";

const Vocab = () => {
    return (
        <div className="vocab">
            <div className="vocabHeader">
                <h2>DAILY VOCABULARY</h2>
            </div>
            <div className="vocabContainer">
                <div>
                    <title>Animal</title>
                    <img width= "200px" src={Animal} alt="Nothing To show"></img>
                </div>
                <div>
                    <title>Vehicle</title>
                    <img width= "200px" src={Vehicle} alt="Nothing To show"></img>
                </div>
                <div>
                    <title>Food</title>
                    <img width= "200px" src={Food} alt="Nothing To show"></img>
                </div>
            </div>
        </div>
    )
}

export default Vocab;