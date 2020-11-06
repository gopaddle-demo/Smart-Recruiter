/**---------------------------------------------------
    *require Modules  
------------------------------------------------------*/
const router = require('express').Router();
// const session = require('express-session');
const bodyparser = require('body-parser');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const student_model = require('../DataBase/models/student_model');
const EmailAuthentication = require('./EmailAuthentication');
/**---------------------------------------------------
    *Middleware Setup for Student  
------------------------------------------------------*/
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use('/emailauthentication', EmailAuthentication);

router.get('/', (req, res) => {
    return res.send('Student Module Working fine....');
})
/**---------------------------------------------------
    *Route for SignUp of Student  
------------------------------------------------------*/
router.post('/StudentSignUp',
    [
        check('name').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail(),
        check('enrollment_id').not().isEmpty().trim().escape(),
        check('branch').not().isEmpty().trim().escape(),
        check('mobile_number').not().isEmpty().trim().escape(),
        check('year_of_passing').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape(),

    ],
    (req, res) => {
        //check validation Errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input or any field is empty',
                err: error.array()
            });
        }
        //password hashing
        const hashpassword = bcryptjs.hashSync(req.body.password, 10);
        student_model.create(
            {
                name: req.body.name,
                email: req.body.email,
                enrollment_id: req.body.enrollment_id,
                branch: req.body.branch,
                mobile_number: req.body.mobile_number,
                year_of_passing: req.body.year_of_passing,
                password: hashpassword,
            },
            (err, result) => {
                //check if error 
                if (err) {
                    return res.json({
                        status: false,
                        msg: 'enrollment Id or email is already register',
                        err: err
                    })
                }
                //if ok
                return res.json({
                    status: true,
                    msg: 'SignUp Successful.... Please Login!',
                    res: result
                })
            }
        )
    }
);

/**---------------------------------------------------
    *Route for Student Login  
------------------------------------------------------*/
router.post('/StudentLogin',
    [
        check('enrollment_id').isEmail().normalizeEmail(),
        check('password').not().isEmpty().trim().escape()
    ], (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.json({
                status: false,
                msg: 'Invalid Input....!',
                err: error.array()
            });
        }

        student_model.findOne({ 'email': req.body.enrollment_id }, (err, student) => {
            if (!student) {
                return res.json({
                    status: false,
                    msg: 'Email Not Found please SignUp First...!'
                });
            } else {
                bcryptjs.compare(req.body.password, student.password, (err, isMatch) => {
                    //if error
                    if (err)
                        return res.send('error');

                    //check password valid or not
                    if (isMatch === false) {
                        return res.json({
                            status: false,
                            msg: 'Invalid Password'
                        });
                    } else {
                        // sessStore = req.session;
                        // sessStore.email = req.body.email;
                        return res.status(200).json({
                            status: true,
                            msg: 'Login Sucessfully....'
                        });
                    }
                });
            }
        });
    });


//exports module
module.exports = router;