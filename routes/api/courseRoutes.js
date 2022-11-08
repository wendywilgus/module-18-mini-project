const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;

//http://localhost:3001/api/courses/:courseId

// // {
// 	"startDate": "2022-11-08T18:45:05.665Z",
// 	"_id": "636a9e349dde7344fe64c27b",
// 	"courseName": "UCLA",
// 	"inPerson": false,
// 	"endDate": "2023-01-31T18:46:59.417Z"
// }
// // 