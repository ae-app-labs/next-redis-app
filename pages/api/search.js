import { searchCars } from "../../lib/redis";

export default async function handler(req, res) {
    console.log('In search api')

    const q = req.query.q;
    console.log(q)
    const cars = await searchCars(q)
    res.status(200).json( { cars })
}