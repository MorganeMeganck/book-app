const User = require("../model/User");
const bcrypt = require("bcrypt");
const { ErrorResponse } = require("../response-schemas/error-schema");
const { generateJWT } = require("../utils/jwt-utils");

const authController = {
  register: async (req, res) => {
    // Recuperation de l'email
    const email = req.validatedData.email;

    // Hashage du mot de passe à l'aide de "bcrypt"
    const password = await bcrypt.hash(req.validatedData.password, 10);

    // Création du compte en base de données
    const member = await User.create({ email, password });

    // Génération d'un « Json Web Token »
    const token = await generateJWT({
      id: member.id,
      isAdmin: member.isAdmin,
    });

    // Envoi du token
    res.json(token);
  },

  login: async (req, res) => {
    try {
      // Recuperation des données
      const { identifier, password } = req.validatedData;

      // Récuperation du compte "member" à l'aide de l'email
      const member = await User.findOne({ identifier });
      // Erreur 422, si le member n'existe pas (pseudo ou email invalide)
      if (!member) {
        return res.status(422).json(new ErrorResponse("Bad credential", 422));
      }
      // Si le member existe: Vérification du password via "bcrypt"
      const isValid = await bcrypt.compare(password, member.password);
      // Erreur 422, si le mot de passe ne correspond pas au hashage
      if (!isValid) {
        return res.status(422).json(new ErrorResponse("Bad credential", 422));
      }
      // Génération d'un « Json Web Token »
      const token = await generateJWT({
        id: member.id,
        isAdmin: member.isAdmin,
      });
      // Envoi du token
      return res.json({ user, token: token });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authController;
