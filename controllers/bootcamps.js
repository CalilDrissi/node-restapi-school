 // * import
 const Bootcamp = require('../models/Bootcamp');
 
 
 
 //** Desc:  get all bootcamps
//*? Route: GET  /api/v1/bootcamps
//*! Access: public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, message: 'Show all bootcamp'});
}

//** Desc:  get single bootcamp
//*? Route: GET  /api/v1/bootcamps/:id
//*! Access: public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: `Show bootcamp ${req.params.id}`});
}

//** Desc:  create new bootcamp
//*? Route: POST  /api/v1/bootcamps/:id
//*! Access: private
exports.createBootcamp =  async(req, res, next) => {

    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
             success: true,
             data: bootcamp
        });
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
   

    // res.status(200).json({success: true, message: 'Create new bootcamp'});
}


//** Desc:  update bootcamp
//*? Route: PUT  /api/v1/bootcamps/:id
//*! Access: private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: `Update bootcamp ${req.params.id}`});
}


//** Desc:  delete bootcamp
//*? Route: DELETE  /api/v1/bootcamps/:id
//*! Access: private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, message: `Delete bootcamp ${req.params.id}`});
}
