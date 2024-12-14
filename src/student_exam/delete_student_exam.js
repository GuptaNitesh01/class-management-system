async function main(req, res) {
    const student_id = req.query.student_id;
    console.log(course_id);

    const { getPGConnection } = require("../base/pg_connector");
    const client = await getPGConnection();
    console.log("CLIENT", client);

    try {
        const result = await client.query(`DELETE FROM student_exams WHERE student_id = $1;`, [student_id]);
        if (result.rowCount > 0) {
            res.send('Delete successfully');
        } else {
            res.status(404).send('Course not found');
        }
    } catch (err) {
        res.status(500).send('Error deleting course');
        console.log(err);
    } finally {
        await client.end();
    }
}

module.exports = {
    main
};