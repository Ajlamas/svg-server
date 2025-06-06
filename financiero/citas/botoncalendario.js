const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(`
    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="40" fill="none">
      <rect width="224" height="39" x=".5" y=".5" fill="#FFEEC3" rx="4.5"/>
      <rect width="224" height="39" x=".5" y=".5" stroke="#F4C95D" rx="4.5"/>
      <text x="25" y="25" font-size="14" font-weight="400" fill="#E3A200">Ver calendario completo</text>
      <path fill="#E9AF1D" d="M200.333 12c.368 0 .667.299.667.667V14h2.667c.736 0 1.333.597 1.333 1.333v11.334c0 .736-.597 1.333-1.333 1.333h-13.334A1.333 1.333 0 0 1 189 26.667V15.333c0-.736.597-1.333 1.333-1.333h2.666v-1.333a.667.667 0 0 1 1.334 0V14h5.334v-1.333c0-.368.298-.667.666-.667m-10 14.667h13.334v-6.666h-13.334zm3.333-2.668a.667.667 0 0 1 0 1.334h-1.333a.667.667 0 0 1 0-1.334zm4 0a.667.667 0 0 1 0 1.334h-1.333a.667.667 0 0 1 0-1.334zm4 0a.667.667 0 0 1 0 1.334h-1.333a.667.667 0 0 1 0-1.334zm-8-2.665a.667.667 0 0 1 0 1.333h-1.333a.667.667 0 1 1 0-1.333zm4 0a.667.667 0 0 1 0 1.333h-1.333a.667.667 0 1 1 0-1.333zm4 0a.667.667 0 0 1 0 1.333h-1.333a.667.667 0 1 1 0-1.333zm-11.333-2.667h13.334v-3.334H201v1.334a.667.667 0 0 1-1.333 0v-1.334h-5.334v1.334a.667.667 0 0 1-1.334 0v-1.334h-2.666z"/>
    </svg>
  `);
});

module.exports = router;
