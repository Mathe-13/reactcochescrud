
import axios from "axios"
import Global from "./Global"

export default class serviceCoche {

    async getCoche() {
        let response = await axios.get(
            Global.urlApiCoches + "api/Coches"
        )

        return response.data
    }

    async findCoche(id) {
        let response = await axios.get(
            Global.urlApiCoches + "api/Coches/FindCoche/" + id
        )

        return response.data
    }

    async insertCoche(coche) {
        let response = await axios.post(
            Global.urlApiCoches + "api/Coches/InsertCoche",
            coche
        )

        return response.data
    }

    async updateCoche(coche) {
        let response = await axios.put(
            Global.urlApiCoches + "api/Coches/UpdateCoche",
            coche
        )

        return response.data
    }

    async deleteCoche(id) {
        let response = await axios.delete(
            Global.urlApiCoches + "api/Coches/DeleteCoche/" + id
        )

        return response.data
    }
}
