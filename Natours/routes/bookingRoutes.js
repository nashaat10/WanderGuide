const express = require("express");
const bookingController = require("../controller/bookingController");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/create-checkout", bookingController.createBookingCheckout);
router.use(authController.protect);

router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(authController.restrictTo("admin", "lead-guide"));

router
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route("/:id")
  .get(bookingController.getOneBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
