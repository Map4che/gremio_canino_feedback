const express = require ("express");
const router = express.Router();



router.get("/", (req, res)=>{
    res.json({msg:"desde routes"});
});

router.post("/", (req, res)=>{
    res.json({msg:"post desde routes"});
});

router.put("/", (req, res)=>{
    res.json({msg:"put desde routes"});
});

router.delete("/", (req, res)=>{
    res.json({msg:"delete desde routes"});
});

module.exports = router;