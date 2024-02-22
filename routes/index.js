import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import departmentRoutes from "./DepartmentRoutes/index.js";
import imageRouter from "./imageRoute/index.js";
import userRoutes from "./userRoutes/index.js";
import pharmacyRoutes from "./pharmacyRoutes/index.js";
import slotRoute from "./slotRoutes/index.js";
import appointmentRoutes from "./AppointmentRoutes/index.js";

const router = express.Router();

router.use("/doctor", doctorRoutes);
router.use("/department", departmentRoutes);
router.use("/user", userRoutes);
router.use("/slotRoute", slotRoute);
router.use("/pharmacy", pharmacyRoutes);
router.use("/upload", imageRouter);
router.use("/appointment", appointmentRoutes);

export default router;
