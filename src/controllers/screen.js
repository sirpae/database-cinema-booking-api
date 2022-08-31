const prisma = require("../utils/prisma");

const createScreen = async(req,res)=> {
    const createScreen = await prisma.screen.create({
        data:{
            number: Number(req.body.number)
        },
        include:{
            screenings:true
        }
    })
    res.json({data: createScreen})
};

module.exports = {
    createScreen
};
  