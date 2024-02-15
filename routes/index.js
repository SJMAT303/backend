import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import departmentRoutes from "./DepartmentRoutes/index.js";
import imageRouter from "./imageRoute/index.js";

const router = express.Router();

router.use("/doctor", doctorRoutes);
router.use("/department", departmentRoutes);
router.use("/upload", imageRouter);

export default router;
