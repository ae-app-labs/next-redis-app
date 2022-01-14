import { createIndex } from "../../lib/redis";

export default async function handle(req, res) {
    await createIndex()

    res.status(200).send('ok')
}