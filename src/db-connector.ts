import { MongoClient, Collection } from "mongodb"
import { AdModel } from "./models/ad-model"

class DbConnector {
  mongoclient: MongoClient
  ads: Collection<AdModel>

  async connect(url: string) {
    this.mongoclient = new MongoClient(url)
    await this.mongoclient.connect()

    this.ads = this.mongoclient.db("ad").collection("ads")
  }
}

export const dbConnector = new DbConnector()