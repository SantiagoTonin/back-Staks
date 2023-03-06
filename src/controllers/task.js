import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("Select * from tasks");
  res.json(rows);
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("Select * from tasks where id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

export const getTasksCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("Select count(*) from tasks");
  res.json(rows[0]["count(*)"]);
};

export const saveTasks = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tasks (title, description) VALUES (?,?)",
    [req.body.title, req.body.description]
  );
  res.json({ id: results.insertId, ...req.body });
};

export const updateTasks = async (req, res) => {
  const connection = await connect();
  const results = await connection.query("UPDATE  tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  res.sendStatus(204);
};

export const deleteTasks = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  res.sendStatus(204);
};


