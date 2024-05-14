// EamrXTuy8KXSZklM
import mongoose, { ConnectOptions } from "mongoose";

interface Connection {
   connected?: number;
}

const connection: Connection = {};

const MongooseClient = async (): Promise<void> => {
   try {
      if (connection.connected) return;

      const dbConfig = {
         uri: process.env.MONGODB_URI as string,
         options: {
            user: process.env.MONGODB_USER as string,
            pass: process.env.MONGODB_PASSWORD as string,
         } as ConnectOptions,
      };

      const db = await mongoose.connect(dbConfig.uri);

      // console.log(db);

      connection.connected = db.connections[0].readyState;

      // Kiểm tra trạng thái kết nối và log ra thông báo tương ứng
      switch (mongoose.connection.readyState) {
         case 0:
            console.log("Kết nối với MongoDB đang được thiết lập...");
            break;
         case 1:
            console.log("Kết nối với MongoDB đã thành công!");
            break;
         case 2:
            console.log("Kết nối với MongoDB đang được đóng lại...");
            break;
         case 3:
            console.log("Kết nối với MongoDB đã đóng!");
            break;
      }
   } catch (err) {
      throw new Error(err as string);
   }
};

export default MongooseClient;
