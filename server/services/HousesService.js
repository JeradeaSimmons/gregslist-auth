import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";



class HousesService {

    async getHouses() {
        let houses = await dbContext.Houses.find()
        return houses

    }
    async getHouseById(houseId) {
        let house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('Invalid House ID')
        }

    }
    async createHouse(houseData) {
        let house = await dbContext.Houses.create(houseData)
        return house
    }
    async editHouse(houseData, houseId) {
        let house = await this.getHouseById(houseId)
        house.bathrooms = houseData.bathrooms || house.bathrooms
        house.rooms = houseData.rooms || house.rooms
        house.year = houseData.year || house.year
        house.price = houseData.price || house.price
        house.imgUrl = houseData.imgUrl || house.imgUrl
        house.description = houseData.description || house.description
        house.levels = houseData.levels || house.levels

        await house.save()
        return house
    }
    async deleteHouse(houseId) {
        let house = await this.getHouseById(houseId)
        await house.remove()
        return house


    }












}


export const housesService = new HousesService()