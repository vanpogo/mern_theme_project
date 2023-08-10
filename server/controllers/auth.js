import User from "../models/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

export const register = async (req, res) => {
  try {
    const { email, password, firstName, userName } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashPassword,
      firstName,
      userName,
    });
    await user.save();

    const token = await generateToken(user._id);
    res.json({ user, token });
  } catch (e) {
    console.log(e);
    res.json({ message: "не удалось зарегистрировать" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ message: "Пользователь с таким email не существует" });

    const isCompare = await bcrypt.compare(password, user.password);
    if (!isCompare)
      return res.json({ message: "Неправильный пароль или логин" });

    const token = await generateToken(user._id);

    res.json({ user, token });
  } catch (e) {
    console.log(e);
    res.json({ message: "не удалось войти в аккаунт" });
  }
};

export const check = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userId });

    const token = await generateToken(user._id);

    res.json({ user, token });
  } catch (e) {
    console.log(e);
    res.json({ message: "нет доступа" });
  }
};
