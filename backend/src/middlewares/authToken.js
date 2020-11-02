const jwt = require("jsonwebtoken");

exports.verificaToken = (req, res, next) => {
  try {

    let token = req.header("Authorization");
    if (!token) {
      res.json({ ok: false, message: "Acceso denegado: por falta de token" });
    }

    //mostrar error de token incorrecto
    verifiToken = jwt.verify(token, process.env.SECRET, (err, userToken) => {
      if (err) {
        res.json({
          ok: false,
          message: "Acceso denegado: su token no es valido",
        });
        throw err;
      } else {
        //crear un req con el nombre se user  
        req.user = userToken;
        next();
      }
    });

  } catch (error) {
    res.json({ message: "error de token ", error });
    next();
  }
};
