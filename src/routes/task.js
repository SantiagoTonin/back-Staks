import { Router } from "express";
import {
  saveTasks,
  deleteTasks,
  getTask,
  getTasks,
  getTasksCount,
  updateTasks,
} from "../controllers/task";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */

router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get count of tasks
 *     description: Return a counter.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */


router.get("/tasks/count", getTasksCount);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get one task by id
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */

router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Creates a new task
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */

router.post("/tasks", saveTasks);

/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Delete a task  by id
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */

router.delete("/tasks/:id", deleteTasks);

/**
 * @swagger
 * /tasks:
 *   put:
 *     summary: Update one task by id
 *     description: Returns a list of all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The task ID.
 *                   name:
 *                     type: string
 *                     description: The task name.
 *                   completed:
 *                     type: boolean
 *                     description: Whether the task is completed or not.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */

router.put("/tasks/:id", updateTasks);

export default router;
