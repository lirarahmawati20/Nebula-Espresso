import { pool } from "../db.js";

export async function getTransactionDetail(_req, res) {
  try {
    const query = `SELECT * FROM transaction_detail`;
    const data = await pool.query(query);
    if (data.length > 0) {
      res.status(200).json({
        status: "success",
        message: "berhasil menampilkan data",
        data: data.rows,
      });
    } else {
      res.status(200).json({
        message: "data kosong",
        data: data.rows,
      });
    }
  } catch (error) {
    console.error("Error in getTransaction:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal mengambil data transaksi",
    });
  }
}

export async function getTransactionById(req, res) {
  try {
    const query = `SELECT * FROM transaction_detail WHERE id = $1`;
    const { rows } = await pool.query(query, [req.params.id]);
    if (rows.length > 0) {
      res.status(200).json({
        status: "success",
        message: "berhasil menampilkan data",
        data: rows[0],
      });
    } else {
      res.status(200).json({
        message: "data kosong",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error in getTransactionById:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal mengambil data transaksi",
    });
  }
}

export async function getTransactionDetailByTransaction(_req, res) {
  try {
    const query = `SELECT * FROM transaction_detail WHERE id_transaction = $1`;
    const data = await pool.query(query, [_req.params.id]);
    res.status(200).json({
      status: "success",
      message: "berhasil menampilkan data",
      data: data.rows,
    });
  } catch (error) {
    console.error("Error in getTransaction:", error);
    res.status(500).json({
      status: "error",
      message: "Gagal mengambil data transaksi",
    });
  }
}
