const router = require("express").Router();
const contactSchema = require("../models/contact");
const { sendPartenariatEmail } = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    sendPartenariatEmail(
      req.body.name,
      req.body.email,
      req.body.partenariat,
      req.body.message
    );

    res.status(200).send();
  } catch (error) {
    res.status(500).send(`Internal server error: ${error.message}`);
  }
});

module.exports = router;
