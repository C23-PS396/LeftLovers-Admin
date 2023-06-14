import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    const { status, transactionId } = req.body;

    try {
      const result = await axios.patch(
        `${process.env.API_URL}/transaction/update`,
        {
          status: status,
          transactionId: transactionId,
        },
      );
      return res.status(200).json(result.data);
    } catch (error: any) {
      return res.status(error.response.status).json(error.response.statusText);
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
