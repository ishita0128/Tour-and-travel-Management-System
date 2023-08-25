express=require("express");
mongoose=require("mongoose");
nodemailer = require("nodemailer");
multiparty = require("multiparty");
require("dotenv").config();
app=express();
const path = require('path');
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));
mongoose.connect("mongodb://localhost:27017/Tour_and_Travel",function(){
    console.log("database connected successfully");
});
//for sign in
signInSchema=mongoose.Schema({
    "email_1"      : {type:String},
    "password_1"  : {type:String},
    
});
signInModel=mongoose.model("signin-data",signInSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
signInModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/signin",function(req,res){
    obj_3={
           "email_1"         :req.query.email_1,
           "password_1"      :req.query.password_1,
    };
    data=new signInModel(obj_3);
    data.save();
    res.send("Sign-Up successfully");
});

app.post("/signin", async(req,res)=>{
    try{
        const email_1 =req.body.email_1;
        const password_1=req.body.password_1;
        const useremail = await signUp-data.findOne({email_1:email_1});
        if(useremail.password_1 === password_1){
            res.status(201).render("Index");
        }
        else{
            res.send("Invalid Login Details");
        }
    }
    catch(error){
        res.status(400).send("Invalid Login details")
    }  
    
});


//for sign-up

signUpSchema=mongoose.Schema({
    "name_1"      : {type:String},
    "name_2"      : {type:String},
    "password_1"  : {type:String},
    "email_1"     : {type:String},
    "number"      : {type:Number},
    "number_1"      : {type:Number},
    
});
signUpModel=mongoose.model("signup-data",signUpSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
signUpModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/signup",function(req,res){
    obj_7={"name"            :req.query.name,
           "name_1"          :req.query.name_1,
           "password_1"      :req.query.password_1,
           "email_1"         :req.query.email_1,
           "number"          :req.query.number,
           "number_1"        :req.query.number_1,
    };
    data=new signUpModel(obj_7);
    data.save();
    res.send("Sign-Up successfully");
});

//for flight
flightSchema=mongoose.Schema({
    "trip_type_selector" : {type:String},
    "from_airport_code"  : {type:String},
    "to_airport_code"    : {type:String},
    "dep_date"           : {type:String},
    "ret_date"           : {type:String}
});
flightModel=mongoose.model("flight-data",flightSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
flightModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/flightdata",function(req,res){
    obj_1={"trip_type_selector":req.query.trip_type_selector,
    "from_airport_code"        :req.query.from_airport_code,
    "to_airport_code"          :req.query.to_airport_code,
    "dep_date"                 :req.query.dep_date,
    "ret_date"                 :req.query.ret_date};
    data=new flightModel(obj_1);
    data.save();
    res.send("Data submitted Successfully");
});

//for train

trainSchema=mongoose.Schema({
    "trip_type_selector_1" : {type:String},
    "from_train_code"    : {type:String},
    "to_train_code"        : {type:String},
    "dep_date_1"           : {type:String},
    "ret_date_1"           : {type:String}
});
trainModel=mongoose.model("train-data",trainSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
trainModel=mongoose.model("train-data",trainSchema);
trainModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/traindata",function(req,res){
    obj_2={"trip_type_selector_1":req.query.trip_type_selector_1,
    "from_train_code"            :req.query.from_train_code,
    "to_train_code"              :req.query.to_train_code,
    "dep_date_1"                 :req.query.dep_date_1,
    "ret_date_1"                 :req.query.ret_date_1};
    data=new trainModel(obj_2);
    data.save();
    res.send("Data submitted Successfully");
});

// for bus
busSchema=mongoose.Schema({
    "trip_type_selector_2" : {type:String},
    "from_bus_code"    : {type:String},
    "to_bus_code"        : {type:String},
    "dep_date_2"           : {type:String},
    "ret_date_2"           : {type:String}
});
busModel=mongoose.model("bus-data",busSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
busModel=mongoose.model("bus-data",busSchema);
busModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/busdata",function(req,res){
    obj_4={"trip_type_selector_2":req.query.trip_type_selector_2,
    "from_bus_code"            :req.query.from_bus_code,
    "to_bus_code"              :req.query.to_bus_code,
    "dep_date_2"                 :req.query.dep_date_2,
    "ret_date_2"                 :req.query.ret_date_2};
    data=new busModel(obj_4);
    data.save();
    res.send("Data submitted Successfully");
});

//for cab
cabSchema=mongoose.Schema({
    "trip_type_selector_3" : {type:String},
    "pickup"               : {type:String},
    "drop"                 : {type:String},
    "dep_date_3"           : {type:String},
    "ret_date_3"           : {type:String}
});
cabModel=mongoose.model("cab-data",cabSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
cabModel=mongoose.model("cab-data",cabSchema);
cabModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/cabdata",function(req,res){
    obj_5={"trip_type_selector_3":req.query.trip_type_selector_3,
    "pickup"                    :req.query.pickup,
    "drop"                       :req.query.drop,
    "dep_date_3"                 :req.query.dep_date_3,
    "ret_date_3"                 :req.query.ret_date_3};
    data=new cabModel(obj_5);
    data.save();
    res.send("Data submitted Successfully");
});

//for hotel
hotelSchema=mongoose.Schema({
    "trip_type_selector_4" : {type:String},
    "place"               : {type:String},
    "name"                 : {type:String},
    "dep_date_4"           : {type:String},
    "ret_date_4"           : {type:String}
});
hotelModel=mongoose.model("hotel-data",hotelSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/Index.html")
})
app.get("/",function(req,res){
hotelModel=mongoose.model("hotel-data",hotelSchema);
hotelModel.find(function(err,data){
    res.send(data);
    res.end();
})
})
app.get("/hoteldata",function(req,res){
    obj_6={"trip_type_selector_4":req.query.trip_type_selector_4,
    "place"                      :req.query.place,
    "name"                       :req.query.name,
    "dep_date_4"                 :req.query.dep_date_4,
    "ret_date_4"                 :req.query.ret_date_4};
    data=new hotelModel(obj_6);
    data.save();
    res.send("Data submitted Successfully");
});


//mail


app.route("/contact").get(function (req, res) {
    res.sendFile(process.cwd() + "/Index.html");
    res.send("Email Sent successfully");
  });
  
// //   //port will be 5000 for testing
// //   const PORT = process.env.PORT || 3000;
// //   app.listen(PORT, () => {
// //     console.log(`Listening on port ${PORT}...`);
// //   });

  const transporter = nodemailer.createTransport({
    host: "gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
//   // verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  app.post("/send", (req, res) => {
//     //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
  
//       //2. You can configure the object however you want
      const mail = {
        from: data.name,
        email: process.env.EMAIL,
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
  
//       //3.
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });

  app.listen(4000);