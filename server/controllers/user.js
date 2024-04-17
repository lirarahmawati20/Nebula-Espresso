import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";

export async function register(req, res) {
  const { username, email, password, role } = req.body;
  try {
    const check = await pool.query(`SELECT * FROM users WHERE username = $1`, [
      username,
    ]);
    if (check.rows.length > 0) {
      return res.status(400).json({
        message: "Username sudah digunakan",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(
        `INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4)`,
        [username, email, hashedPassword, role]
      );
      return res.status(201).json({
        status: "success",
        message: "Berhasil menambahkan data",
        data: {
          username,
          email,
          role,
        },
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE role = 'admin' and  username = '${username}'`
    );
    if (user.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid password");
    }

    // Memperbarui req.user dengan data pengguna dari hasil query
    req.user = user.rows[0];

    // Buat access token
    const accessToken = jwt.sign(
      {
        userId: user.rows[0].id,
      },
      process.env.JWT_SECRET_ADMIN,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
      }
    );

    // Buat refresh token
    const refreshToken = jwt.sign(
      {
        userId: user.rows[0].id,
      },
      process.env.JWT_SECRET_ADMIN,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
      }
    );

    // Hitung waktu kedaluwarsa token
    const accessTokenExpiresIn = formatExpirationDate(
      new Date(Date.now() + process.env.ACCESS_TOKEN_EXPIRATION * 1000)
    );
    const refreshTokenExpiresIn = formatExpirationDate(
      new Date(Date.now() + process.env.REFRESH_TOKEN_EXPIRATION * 1000)
    );

    res.json({
      accessToken,
      refreshToken,
      accessTokenExpiresIn,
      refreshTokenExpiresIn,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function loginKasir(req, res) {
  const { username, password } = req.body;
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE role = 'kasir' and  username = '${username}'`
    );
    if (user.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid password");
    }

    // Memperbarui req.user dengan data pengguna dari hasil query
    req.user = user.rows[0];

    // Buat access token
    const accessToken = jwt.sign(
      {
        userId: user.rows[0].id,
      },
      process.env.JWT_SECRET_KASIR,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
      }
    );

    // Buat refresh token
    const refreshToken = jwt.sign(
      {
        userId: user.rows[0].id,
      },
      process.env.JWT_SECRET_KASIR,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
      }
    );

    // Hitung waktu kedaluwarsa token
    const accessTokenExpiresIn = formatExpirationDate(
      new Date(Date.now() + process.env.ACCESS_TOKEN_EXPIRATION * 1000)
    );
    const refreshTokenExpiresIn = formatExpirationDate(
      new Date(Date.now() + process.env.REFRESH_TOKEN_EXPIRATION * 1000)
    );

    res.json({
      accessToken,
      refreshToken,
      accessTokenExpiresIn,
      refreshTokenExpiresIn,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function refresh(req, res) {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token tidak tersedia",
    });
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Refresh token tidak valid",
      });
    }

    // Memperbarui req.user dengan data pengguna dari refresh token
    req.user = user;

    const accessToken = jwt.sign(
      {
        userId: user.userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
      }
    );

    // Hitung waktu kedaluwarsa token dalam zona waktu GMT+7
    const accessTokenExpiresIn = formatExpirationDate(
      new Date(Date.now() + process.env.ACCESS_TOKEN_EXPIRATION * 1000)
    );

    res.json({
      accessToken,
      accessTokenExpiresIn,
    });
  });
}

export async function testToken(req, res) {
  res.json({
    message: "Ini adalah data terproteksi",
  });
}

function formatExpirationDate(date) {
  return new Date(date.getTime() + 7 * 60 * 60 * 1000).toISOString(); // Tambah 7 jam untuk GMT+7
}

// Get all kasir
export const getAllKasir = async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users where role = 'kasir' "
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// Delete Kasir by ID
export const deleteKasirById = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE role = 'kasir' AND id = $1", [
      id,
    ]);
    res.status(200).json({
      message: "Kasir successfully deleted.",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
