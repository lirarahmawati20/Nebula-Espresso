import { pool } from "../db.js";

export async function getTransaction(_req, res) {
  try {
    const query = `SELECT * FROM transaksi`;
    const data = await pool.query(query);
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

export async function getTransactionById(req, res) {
  try {
    const query = `SELECT * FROM transaksi WHERE id = $1`;
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

export async function postTransaction(request, res) {
  //   const request = req.body;
  //   console.log(request.data);

  if (!request.body || !request.body.data || request.body.data.length < 1) {
    return res.status(400).json({
      status: "failed",
      message: "Data transaksi tidak boleh kosong!",
    });
  }

  const date = new Date();
  const no_transaction = makeid(10);

  try {
    // Insert into transaksi table
    const transactionResult = await pool.query(
      `INSERT INTO transaksi (user_id, tanggal, no_transaction, total_price, total_product, customer, nomeja, status) VALUES (1, $1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [
        date,
        no_transaction,
        request.body.total_price,
        request.body.amount,
        request.body.customer,
        request.body.nomeja,
        "panding",
      ]
    );
    const transactionId = transactionResult.rows[0].id;

    console.log("ini transaksi id ", transactionId);

    // Insert into transaksi_detail table
    for (let i = 0; i < request.body.data.length; i++) {
      const data = request.body.data[i];
      await pool.query(
        `INSERT INTO transaction_detail (product_name, product_price, amount, total_price, image, id_transaction) VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          data.name,
          data.price,
          data.quantity,
          data.total_price,
          data.image,
          transactionId,
        ]
      );

      // Update product stock
      await pool.query(`UPDATE product SET stock = stock - $1 WHERE id = $2`, [
        data.quantity,
        data.id,
      ]);
    }

    return res.status(201).json({
      status: "success",
      message: "Berhasil menambahkan data transaksi",
      data: transactionResult.rows[0],
    });
  } catch (error) {
    console.error("Error in postTransaction:", error);
    return res.status(500).json({
      status: "error",
      message: "Gagal menambahkan data transaksi",
    });
  }
}

// Update product
export const updateToPaid = async (req, res) => {
  try {
    await pool.query("UPDATE transaksi SET status = 'paid' WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      message: "transaction successfully updated.",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const updateToProccess = async (req, res) => {
  try {
    await pool.query("UPDATE transaksi SET status = 'proccess' WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      message: "transaction successfully updated.",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const updateToSelesai = async (req, res) => {
  try {
    await pool.query("UPDATE transaksi SET status = 'selesai' WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      message: "transaction successfully updated.",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

function makeid(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
