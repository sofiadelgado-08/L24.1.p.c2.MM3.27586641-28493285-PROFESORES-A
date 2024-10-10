import Cl_profesor from "./js/Cl_profesor.js";
import Cl_fijo from "./js/Cl_fijo.js";
import Cl_contratado from "./js/Cl_contratado.js";

export default class Cl_main {
    constructor(){
        let fijo = new Cl_fijo ("carlos", 25);
        let fijo2 = new Cl_fijo ("carolina", 40);
    }
}