import Person from '../Models/userModels.js'
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class register {
static async signup(req, res) {
    try {
      const { email} = req.body;
      const id = uuidv4();
      const inSystem = await Person.findOne(
        {email: email}
      );
      if (inSystem) {
        return res
          .status(409)
          .json({ status: 409, message: 'The email is already in the system'});
      }
      let hashedPassword = bcrypt.hashSync(req.body.password, 8);
      let hashedPassword2 = bcrypt.hashSync(req.body.password2, 8);
      const newUser = await Person.create({
        email:req.body.email,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phone:req.body.phone,
        password:hashedPassword,
        password2:hashedPassword2,
      });

      const newUserDisplay = {
        id: newUser.id,
        email: newUser.email,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        phone:newUser.phone,
        password:newUser.password
      };
      return res.status(201).json({
        
        message: res.status(201).json({
          status: 201,
          message: 'user created successfully',
          data : newUserDisplay,
        }),
        
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: 500, message: error.message });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await Person.findOne({email:email });
      if (!user) {
        return res.status(404).json({
          status: 404,
          message: 'Wrong email, please enter the registered email.',
        });
      }
      const user1 = await Person.findOne({password:password });
      if (!user1) {
        return res.status(400).json({
          status: 400,
          message: 'Wrong password, Please enter the registered password.',
        });
      }
      
     

      
     
      return res.status(200).json({
        status: 200,
        message: 'logged In successfull',
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }


  static async getAllUsers(req, res) {
    const users = await Person.find();
    res.status(200).json({
      data:users,
    });
  }
}
export default register;





