import clientPromise from ".";

let client
let db
let problems

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db('db_problems')
        problems = await db.collection('collection_problems')
        console.log('connection established')
    } catch (error) {
        console.log(error)
        throw new Error('failed to connect to db')
    }
}

;(async () => {
    await init()
})()

export async function getProblems() {
    try {
        if (!problems) await init()
        const result = await problems
            .find({})
            .limit(500)
            .map(user => ({ ...user, _id: user._id.toString()}))
            .toArray()
        return {problems:result}

    } catch (error) {
        return {error:'Failed to fetch problems'}
    }
}